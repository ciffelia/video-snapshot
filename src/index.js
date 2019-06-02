import createCanvasFromVideo from './createCanvasFromVideo'
import downloadBlob from './downloadBlob'

const capture = () => {
  const video = document.querySelector('video')

  const canvas = createCanvasFromVideo(video)

  canvas.toBlob(blob => {
    downloadBlob(blob, 'snapshot.png')
  })
}

GM_registerMenuCommand('Capture video snapshot', capture, 'c')
