import * as React from "react"

const __DEV__ = process.env.NODE_ENV === "development"

const MAXLEN = 5
const THRESHOLD = 500
function isCtrl(event: KeyboardEvent): boolean {
  if (window.navigator.userAgent.indexOf("Mac OS X") >= 0) {
    return event.metaKey
  }

  return event.ctrlKey
}

type SetState<T> = React.Dispatch<React.SetStateAction<T>>
interface ContextType {
  content: string
  setContent: SetState<string>
  isUndoable: boolean
  isRedoable: boolean
  undo(): void
  redo(): void
}

const UndoableContext = React.createContext<ContextType | null>(null)

interface ProviderProps {
  children: React.ReactNode | React.ReactNodeArray
}

const UndoableProvider = ({ children }) => {
  const [past, setPast] = React.useState<any[]>([])
  const [present, setPresent]: any = React.useState<any>({})
  const [future, setFuture] = React.useState<any[]>([])

  function setContent(action: React.SetStateAction<any>) {
    setPast((old) => [present, ...old].slice(0, MAXLEN))
    setPresent(action)
    // if (typeof action === J) {
    //   setPresent(action)
    // } else {
    //   setPresent((old: any) => action(old))
    // }
  }

  const undo = () => {
    if (past.length < 1 || past.length > MAXLEN) {
      return
    }

    const [last, ...rest] = past

    setPast(rest)
    setFuture((old) => [present, ...old])
    setPresent(last)
    // UndoCustomization()
  }

  const redo = () => {
    if (future.length < 1 || future.length > MAXLEN) {
      return
    }

    const [first, ...rest] = future

    setFuture(rest)
    setPresent(first)
    setPast((old) => [present, ...old])
  }

  return (
    <UndoableContext.Provider
      value={{
        content: present,
        setContent,
        undo,
        redo,
        isUndoable: past.length > 0,
        isRedoable: future.length > 0
      }}
    >
      {children}
    </UndoableContext.Provider>
  )
}
export default UndoableProvider

export function useUndoable() {
  const state = React.useContext(UndoableContext)
  //   console.log("state", state)
  if (state == null) {
    throw new Error("context must not be null!")
  }

  return state
}

export function UndoableInput() {
  const { content, setContent } = useUndoable()
  return (
    <textarea
      style={{
        width: "100%",
        resize: "none"
      }}
      rows={5}
      onKeyDown={(e) => {
        const ctrl = isCtrl(e.nativeEvent)
        if (ctrl && [89, 90].indexOf(e.keyCode) >= 0) {
          e.preventDefault()
        }
      }}
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  )
}

export function UndoButton() {
  const { undo, isUndoable } = useUndoable()

  return (
    <button disabled={!isUndoable} onClick={undo}>
      Undo
    </button>
  )
}

export function RedoButton() {
  const { redo, isRedoable } = useUndoable()

  return (
    <button disabled={!isRedoable} onClick={redo}>
      Redo
    </button>
  )
}

export function UndoableKeyboardManager() {
  const { undo, redo } = useUndoable()

  React.useEffect(() => {
    const handleCtrl = (event: KeyboardEvent) => {
      const { keyCode } = event

      const ctrl = isCtrl(event)

      if (!ctrl) {
        return
      }

      switch (keyCode) {
        case 89: // Y
          redo()
          break
        case 90: // Z
          undo()
          break
        default:
      }
    }

    document.addEventListener("keydown", handleCtrl)

    return () => document.removeEventListener("keydown", handleCtrl)
  }, [undo, redo])

  return null
}

export function App() {
  return (
    <UndoableProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>{`Undo limit is ${MAXLEN}`}</h2>
        <UndoableInput />
        <UndoButton />
        <RedoButton />
        <UndoableKeyboardManager />
      </div>
    </UndoableProvider>
  )
}
