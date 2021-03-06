// ---------------- Marka ----------------------
function markaInit() {
  if (!window.marka) return
  setTimeout(() => {
    marka.init({
      container: options.container,
    })
  }, options.markaInitDelay)
}

let options = {
  container: '.js-marka-container',
  markaInitDelay: 0,
}

export const onInitialClientRender = function (_o, pluginOptions) {
  options = {
    ...options,
    ...pluginOptions,
  }
  const styleLink = document.createElement('link')
  styleLink.rel = 'stylesheet'
  styleLink.href = 'https://cdn.jsdelivr.net/npm/marka-js@latest/dist/marka.css'
  document.head.appendChild(styleLink)

  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/marka-js@latest/dist/marka-js.umd.js'
  document.body.appendChild(script)

  script.addEventListener('load', function () {
    marka.onScriptLoaded(this)
    markaInit(options)
  })
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (window.marka) {
    markaInit(options)
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      markaInit(options)
    })
  }
}
// ----------------end Marka -------------------
