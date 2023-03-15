import { useAppProvider } from "@appProvider/AppProvider"
import { useUndoable } from "@appProvider/UndoableProvider"
import { useEffect, useState } from "react"
import { updatePluginValue } from "../../utils/uiController"
import { LOGO, LOGO_PLUGIN_ID } from "../Constant/const"

const DimensionChanger = ({ nameSection }: any) => {
  const {
    // logo hight and width
    setMinWidthLogo,
    setMaxWidthLogo,
    setMinHeightLogo,
    setMaxHeightLogo,

    setHeaderDBFormat,
    headerDBFormat,
    // update logo value
    minWidthLogo,
    maxWidthLogo,
    minHeightLogo,
    maxHeightLogo
  }: any = useAppProvider()

  const { content, setContent }: any = useUndoable()
  const [minWidth, setMinWidth] = useState(0)
  const [maxWidth, setMaxWidth] = useState(0)
  const [minHeight, setMinHeight] = useState(0)
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    if (nameSection === LOGO) {
      setMinWidth(minWidthLogo)
      setMaxWidth(maxWidthLogo)
      setMinHeight(minHeightLogo)
      setMaxHeight(maxHeightLogo)
    }
  }, [])

  //handle for min width change
  const handleMinWidthChange = (e: any) => {
    console.log("min width", e.target.value)
    setMinWidth(e.target.value)
    if (nameSection === LOGO) {
      setMinWidthLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "minWidthLogo", e.target.value)
      )
      setContent({ name: "minWidth", value: e.target.value, nameSection: LOGO })
    }
  }

  //handle for max width change
  const handleMaxWidthChange = (e: any) => {
    setMaxWidth(e.target.value)
    if (nameSection === LOGO) {
      setMaxWidthLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "maxWidthLogo", e.target.value)
      )
      setContent({ name: "maxWidth", value: e.target.value, nameSection: LOGO })
    }
  }
  //handle for min height change
  const handleMinHeightChange = (e: any) => {
    setMinHeight(e.target.value)
    if (nameSection === LOGO) {
      setMinHeightLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "minHeightLogo", e.target.value)
      )
      setContent({ name: "minHeight", value: e.target.value, nameSection: LOGO })
    }
  }
  //handle for max height change
  const handleMaxHeightChange = (e: any) => {
    setMaxHeight(e.target.value)

    if (nameSection === LOGO) {
      setMaxHeightLogo(e.target.value)
      setHeaderDBFormat(
        updatePluginValue(headerDBFormat, LOGO_PLUGIN_ID, "maxHeightLogo", e.target.value)
      )
      setContent({ name: "maxHeight", value: e.target.value, nameSection: LOGO })
    }
  }
  return (
    <div style={{ position: "relative" }}>
      <div role="document" className="editor resizable-content flex flex-column">
        <div className="form ps ps--active-y">
          {/* Size */}
          <div className="form-group form-group-collapsible">
            <label className="form-label">
              <a
                href="#"
                className="form-group-toggle"
                title="Toggle section"
                aria-label="Toggle 'Size' section"
                role="button"
                aria-expanded="true"
              ></a>
              <b>Size</b>
            </label>
            <div
              id="sizeCollapse"
              className="collapse form-group-collapse"
              role="region"
              aria-hidden="false"
            >
              {/*  Min width */}
              <div className="form-group">
                <label className="form-label">
                  Min width
                  <button
                    className="btn btn-info"
                    role="tooltip"
                    aria-label="Min container width"
                  ></button>
                </label>
                <div>
                  <div className="input-group">
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      placeholder="(Inherit)"
                      id="minWidth"
                      value={minWidth}
                      onChange={handleMinWidthChange}
                    />

                    <div className="input-group-addon" data-bind="text: displayUnits">
                      px
                    </div>
                  </div>
                </div>
              </div>
              {/* for max width */}
              <div className="form-group">
                <label className="form-label">
                  Max width
                  <button
                    className="btn btn-info"
                    role="tooltip"
                    aria-label="Max container width"
                  ></button>
                </label>
                <div>
                  <div className="input-group">
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      placeholder="(Inherit)"
                      id="maxWidth"
                      value={maxWidth}
                      onChange={handleMaxWidthChange}
                    />

                    <div className="input-group-addon" data-bind="text: displayUnits">
                      px
                    </div>
                  </div>
                </div>
              </div>
              {/* Min height */}
              <div className="form-group">
                <label className="form-label">
                  Min height
                  <button
                    className="btn btn-info"
                    role="tooltip"
                    aria-label="Min container height"
                  ></button>
                </label>
                <div>
                  <div className="input-group">
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      placeholder="(Inherit)"
                      id="minHeight"
                      value={minHeight}
                      onChange={handleMinHeightChange}
                    />

                    <div className="input-group-addon" data-bind="text: displayUnits">
                      px
                    </div>
                  </div>
                </div>
              </div>
              {/* Max height */}
              <div className="form-group">
                <label className="form-label">
                  Max height
                  <button
                    className="btn btn-info"
                    role="tooltip"
                    aria-label="Max container height"
                  ></button>
                </label>
                <div>
                  <div className="input-group">
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      placeholder="(Inherit)"
                      id="maxHeight"
                      value={maxHeight}
                      onChange={handleMaxHeightChange}
                    />

                    <div className="input-group-addon" data-bind="text: displayUnits">
                      px
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DimensionChanger
