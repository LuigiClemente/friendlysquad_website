import { useEffect, useRef, useState } from "react"

// get the value from db.json file for each plugin.id
export const getPluginValue = (result: any, pluginName: any) => {
  let defaultValue = null
  if (result) {
    result?.rows[0].cells[0].rows.map((row: any) => {
      row.cells.map((cell: any, index: number) => {
        if (cell.plugin.id === pluginName) {
          defaultValue = cell.dataI18n.en
          return defaultValue
        }
      })
    })
  } else {
    console.log("JSON file is empty")
  }
  return defaultValue
}
// update the value in temp db
export const updatePluginValue = (result: any, pluginName: any, property: string, value: any) => {
  result?.rows[0].cells[0].rows.map((row: any) => {
    row.cells.map((cell: any) => {
      if (cell.plugin.id === pluginName) {
        console.log("Theme changer>>>>> === ==>", property, value)
        cell.dataI18n.en[`${property}`] = value
      }
    })
  })
  return result
}
// change size of plugin

// Get value from db.json file for each plugin.id and property
export const getPluginValueProperty = (result: any, pluginName: any, property: string) => {
  let defaultValue = null
  if (result) {
    console.log("result getPluginValueProperty is", result, pluginName, property)
    result?.rows[0].cells[0].rows.map((row: any) => {
      row.cells.map((cell: any, index: number) => {
        console.log(" row ==>", cell.plugin.id)
        if (cell.plugin.id === pluginName) {
          console.log("cell.dataI18n.en[`${property}`] ==>", property)
          defaultValue = cell.dataI18n.en[`${property}`]
          return defaultValue
        }
      })
    })
  } else {
    console.log("JSON file is empty")
  }
  return defaultValue
}

// redo and undo logic for useContext
export const useUndo = (initialPresent?: any) => {
  const [past, setPast] = useState<any[]>([])
  const [present, setPresent] = useState(initialPresent)
  const [future, setFuture] = useState<any[]>([])

  const canUndo = past.length !== 0
  const canRedo = future.length !== 0

  const undo = () => {
    if (canUndo) {
      setFuture([present, ...future])
      setPresent(past[past.length - 1])
      setPast(past.slice(0, past.length - 1))
    }
  }

  const redo = () => {
    if (canRedo) {
      setPast([...past, present])
      setPresent(future[0])
      setFuture(future.slice(1))
    }
  }

  const set = (newPresent: any) => {
    if (newPresent !== present) {
      setPast([...past, present])
      setPresent(newPresent)
      setFuture([])
    }
  }

  const reset = (newPresent: any) => {
    setPast([])
    setPresent(newPresent)
    setFuture([])
  }

  return {
    set,
    reset,
    undo,
    redo,
    canUndo,
    canRedo,
    present
  }
}

// algorithm for tracking the changes in many state
export const useChangeTracker = (initialState: any) => {
  const [state, setState] = useState(initialState)
  const [changes, setChanges] = useState({})

  const set = (newState: any) => {
    setState(newState)
  }

  const setChange = (key: string, value: any) => {
    setChanges({ ...changes, [key]: value })
  }

  const resetChanges = () => {
    setChanges({})
  }

  return {
    state,
    set,
    changes,
    setChange,
    resetChanges
  }
}
//

export default function useWhyDidYouUpdate(name: string, props: any) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const previousProps = useRef<any>()

  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props })
      // Use this object to keep track of changed props
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const changesObj: any = {}
      // Iterate through keys
      allKeys.forEach((key) => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          }
        }
      })

      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        // tslint:disable-next-line:no-console
        console.log("[why-did-you-update]", name, changesObj)
      }
    }

    // Finally update previousProps with current props for next hook call
    previousProps.current = props
  })
}

// filter thr array by date
export const filterByDate = (array: any, date: any) => {
  const arr = []
  array.filter((item: any) => {
    console.log("date is ------>>> ", item.date, "given date --->", date)
    if (item.date === date) {
      arr.push(item)
    }
  })
  return arr
}
