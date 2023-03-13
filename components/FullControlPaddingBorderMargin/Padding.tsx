import React from "react"

const Padding1 = () => {
  return (
    <div style={{ position: "relative" }}>
      <div role="document" className="editor resizable-content flex flex-column">
        <h1 id="popupHeading">
          <span data-bind="text: heading">Heading Level 1</span>
        </h1>

        <button className="btn btn-dismiss" title="Close" aria-label="Close">
          <i aria-hidden="true" className="paperbits-icon paperbits-simple-remove"></i>
        </button>

        <div className="form ps ps--active-y">
          <div className="form-group form-group-collapsible">
            <label className="form-label">
              <a
                href="#"
                className="form-group-toggle"
                title="Toggle section"
                aria-label="Toggle section"
                role="button"
                aria-expanded="true"
              ></a>
              <b>Main</b>
            </label>
            <div
              id="miscellaneousCollapse"
              className="collapse form-group-collapse"
              role="region"
              aria-hidden="false"
            >
              <div className="form-group">
                <button className="btn btn-info" role="tooltip"></button>
                <label>Style name</label>
                <input id="styleName" type="text" className="form-control" />
              </div>
            </div>
          </div>

          <div className="form-group form-group-collapsible">
            <label className="form-label">
              <a
                href="#"
                className="form-group-toggle"
                title="Toggle section"
                aria-label="Toggle 'Typography' section"
                role="button"
                aria-expanded="true"
              ></a>
              <b>Typography</b>
              <button className="btn btn-info" role="tooltip"></button>
            </label>
            <div
              id="typographyCollapse"
              className="collapse form-group-collapse"
              role="region"
              aria-hidden="false"
            >
              <div className="form-group">
                <label>Font family</label>
                <div className="input-group">
                  <input id="fontFamily" className="form-control" aria-expanded="false" />
                  <span className="btn input-group-btn">
                    <i aria-hidden="true" className="paperbits-icon paperbits-small-down"></i>
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label>Font size</label>
                <div>
                  <div className="input-group">
                    <input type="number" min="0" className="form-control" placeholder="(Inherit)" />

                    <button className="btn input-group-btn" aria-expanded="false">
                      <b data-bind="text: displayUnits">px</b>
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Line height</label>
                <div>
                  <div className="input-group">
                    <input type="number" min="0" className="form-control" placeholder="(Inherit)" />

                    <button className="btn input-group-btn" aria-expanded="false">
                      <b data-bind="text: displayUnits">px</b>
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Letter spacing</label>
                <div>
                  <div className="input-group">
                    <input type="number" min="0" className="form-control" placeholder="(Inherit)" />

                    <div className="input-group-addon" data-bind="text: displayUnits">
                      px
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="toolbox-btn toolbox-btn-is-active" title="Font weight">
                  <a href="#" role="button" aria-label="Change font weight">
                    <i aria-hidden="true" className="paperbits-icon paperbits-bold"></i>
                  </a>
                </div>
                <div className="toolbox-btn toolbox-btn-is-active" title="Font style">
                  <a href="#" role="button" aria-label="Change font style">
                    <i aria-hidden="true" className="paperbits-icon paperbits-italic"></i>
                  </a>
                </div>
                <div className="toolbox-btn" title="Align left">
                  <a href="#" role="button" aria-label="Align text left">
                    <i aria-hidden="true" className="paperbits-icon paperbits-align-left-2"></i>
                  </a>
                </div>
                <div className="toolbox-btn" title="Align center">
                  <a href="#" role="button" aria-label="Align text center">
                    <i aria-hidden="true" className="paperbits-icon paperbits-align-center"></i>
                  </a>
                </div>
                <div className="toolbox-btn" title="Align right">
                  <a href="#" role="button" aria-label="Align text right">
                    <i aria-hidden="true" className="paperbits-icon paperbits-align-right-2"></i>
                  </a>
                </div>
                <div className="toolbox-btn" title="Justify">
                  <a href="#" role="button" aria-label="Justify text">
                    <i aria-hidden="true" className="paperbits-icon paperbits-align-justify"></i>
                  </a>
                </div>
              </div>

              <div className="form-group">
                <label>Text color</label>
                <button
                  id="textColor"
                  className="btn btn-default"
                  data-bind="text: $component.colorName, balloon: { component: { name: 'color-selector', params: { selectedColorKey: $component.colorKey, onSelect: $component.onColorSelected } } }"
                  aria-expanded="false"
                >
                  (Inherit)
                </button>
              </div>

              <div className="form-group">
                <label>Text shadow</label>
                <div className="input-group">
                  <input id="textShadow" className="form-control" aria-expanded="false" />
                  <span className="btn input-group-btn">
                    <i aria-hidden="true" className="paperbits-icon paperbits-small-down"></i>
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label>Transformation</label>
                <select id="textTransform" className="form-control">
                  <option value="">(Inherit)</option>
                  <option value="none">None</option>
                  <option value="capitalize">Capitalize</option>
                  <option value="lowercase">Lower-case</option>
                  <option value="uppercase">Upper-case</option>
                </select>
              </div>

              <div className="form-group">
                <label>Decoration</label>
                <select id="textDecoration" className="form-control">
                  <option value="">(Inherit)</option>
                  <option value="none">None</option>
                  <option value="underline">Underline</option>
                  <option value="overline">Overline</option>
                  <option value="line-through">Line through</option>
                </select>
              </div>
            </div>
          </div>

          {/* Shadow */}
          <div className="form-group form-group-collapsible">
            <label className="form-label">
              <a
                href="#"
                className="form-group-toggle"
                title="Toggle section"
                aria-label="Toggle 'Shadow' section"
                role="button"
                aria-expanded="true"
              ></a>
              <b>Shadow</b>
            </label>

            <div
              id="shadowCollapse"
              className="collapse form-group-collapse"
              role="region"
              aria-hidden="false"
            >
              <div className="form-group">
                <label>Type</label>
                <div className="input-group">
                  <input id="shadowType" className="form-control" aria-expanded="false" />
                  <span className="btn input-group-btn">
                    <i aria-hidden="true" className="paperbits-icon paperbits-small-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Transform and scale */}
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
                <input
                  id="translateX"
                  type="number"
                  className="form-control"
                  placeholder="(Inherit)"
                />
              </div>
              <div className="form-group">
                <label>Translate Y (px)</label>
                <input
                  id="translateY"
                  type="number"
                  className="form-control"
                  placeholder="(Inherit)"
                />
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
                    />

                    <div className="input-group-addon" data-bind="text: displayUnits">
                      px
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group form-group-collapsible">
            <label className="form-label">
              <a
                href="#"
                className="form-group-toggle"
                title="Toggle section"
                aria-label="Toggle section"
                role="button"
                aria-expanded="true"
              ></a>
              <b>Box</b>
            </label>
            <div
              id="boxCollapse"
              className="collapse form-group-collapse"
              role="region"
              aria-hidden="false"
            >
              {/* For Margin */}
              <div>
                <div className="box-model">
                  <div className="box-model-margin box-model-enabled">
                    <div className="box-model-group">
                      <span className="box-model-label">margin</span>
                      <input
                        type="text"
                        className="box-model-control box-model-control-top"
                        placeholder="-"
                        aria-expanded="false"
                      />
                      <input
                        type="text"
                        className="box-model-control box-model-control-left"
                        placeholder="-"
                        aria-expanded="false"
                      />
                      <input
                        type="text"
                        className="box-model-control box-model-control-right"
                        placeholder="-"
                        aria-expanded="false"
                      />
                      <input
                        type="text"
                        className="box-model-control box-model-control-bottom"
                        placeholder="-"
                        aria-expanded="false"
                      />
                    </div>
                    {/* for Border */}
                    <div className="box-model-border box-model-enabled">
                      <div className="box-model-group">
                        <span className="box-model-label">border</span>
                        <input
                          type="text"
                          className="box-model-control box-model-control-top"
                          placeholder="-"
                          aria-expanded="false"
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-left"
                          placeholder="-"
                          aria-expanded="false"
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-right"
                          placeholder="-"
                          aria-expanded="false"
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-bottom"
                          placeholder="-"
                          aria-expanded="false"
                        />

                        <input
                          type="text"
                          className="box-model-control box-model-control-top-left"
                          placeholder="-"
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-top-right"
                          placeholder="-"
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-bottom-left"
                          placeholder="-"
                        />
                        <input
                          type="text"
                          className="box-model-control box-model-control-bottom-right"
                          placeholder="-"
                        />
                      </div>

                      <div className="box-model-padding box-model-enabled">
                        <div className="box-model-group">
                          <span className="box-model-label">padding</span>
                          <input
                            type="text"
                            className="box-model-control box-model-control-top"
                            placeholder="-"
                          />
                          <input
                            type="text"
                            className="box-model-control box-model-control-left"
                            placeholder="-"
                          />
                          <input
                            type="text"
                            className="box-model-control box-model-control-right"
                            placeholder="-"
                          />
                          <input
                            type="text"
                            className="box-model-control box-model-control-bottom"
                            placeholder="-"
                          />
                        </div>

                        <div className="box-model-content">content</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ps__rail-x" style={{ left: "0px", bottom: "-2071px" }}>
            <div className="ps__thumb-x" style={{ left: "0px", width: "0px" }}></div>
          </div>
          <div className="ps__rail-y" style={{ top: "2071px", right: "0px", height: "575px" }}>
            <div
              className="ps__thumb-y"
              style={{ top: "451px", height: "124px" }}
              role="scrollbar"
              aria-label="Vertical scrollbar"
            ></div>
          </div>
        </div>
      </div>
      <div className="rehandle rehandle-top"></div>
      <div className="rehandle rehandle-bottom"></div>
      <div className="rehandle rehandle-left"></div>
      <div className="rehandle rehandle-right"></div>
      <div className="rehandle rehandle-top"></div>
      <div className="rehandle rehandle-bottom"></div>
      <div className="rehandle rehandle-left"></div>
      <div className="rehandle rehandle-right"></div>
    </div>
  )
}

export default Padding1
