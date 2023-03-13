import React from "react"

const TransformChanger = () => {
  return (
    <div role="document" className="editor resizable-content flex flex-column">
      <div className="form-group form-group-collapsible">
        <label className="form-label">
          <a
            href="#"
            className="form-group-toggle"
            title="Toggle section"
            aria-label="Toggle 'Transform' section"
            role="button"
            aria-expanded="true"
          ></a>
          <b>Transform</b>
          <button className="btn btn-info" role="tooltip"></button>
        </label>

        <div
          id="transformCollapse"
          className="collapse form-group-collapse"
          role="region"
          aria-hidden="false"
        >
          {/* <transform params="{ transform: elementStyleTransform, onUpdate: onTransformUpdate }"> */}
          <div className="form-group">
            <label>Translate X (px)</label>
            <input id="translateX" type="number" className="form-control" placeholder="(Inherit)" />
          </div>
          <div className="form-group">
            <label>Translate Y (px)</label>
            <input id="translateY" type="number" className="form-control" placeholder="(Inherit)" />
          </div>
          <div className="form-group">
            <label>Scale X</label>
            <input id="scaleX" type="number" className="form-control" placeholder="(Inherit)" />
          </div>
          <div className="form-group">
            <label>Scale Y</label>
            <input id="scaleY" type="number" className="form-control" placeholder="(Inherit)" />
          </div>
          <div className="form-group">
            <label>Rotate (degrees)</label>
            <input id="rotate" type="number" className="form-control" placeholder="(Inherit)" />
          </div>
          {/* </transform> */}
        </div>
      </div>
    </div>
  )
}

export default TransformChanger
