const createCanvasFromVideo = videoElm => {
  const canvasElm = document.createElement('canvas')
  canvasElm.width = videoElm.videoWidth
  canvasElm.height = videoElm.videoHeight

  const ctx = canvasElm.getContext('2d')
  ctx.drawImage(videoElm, 0, 0, videoElm.videoWidth, videoElm.videoHeight)

  return canvasElm
}

export default createCanvasFromVideo
