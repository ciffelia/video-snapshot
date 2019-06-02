const downloadBlob = (blob, filename) => {
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = URL.createObjectURL(blob)
  a.download = filename

  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export default downloadBlob
