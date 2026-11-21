export const compose = () => {
  document.addEventListener('keydown', (e) => {
    const key = e.key

    if (key === 'Backspace') {
      const notes = document.querySelectorAll('.note')
      const last = notes[notes.length - 1]
      if (last) last.remove()
      return
    }

    if (key === 'Escape') {
      document.querySelectorAll('.note').forEach((note) => note.remove())
      return
    }

    if (/^[a-z]$/.test(key)) {
      const note = document.createElement('div')
      note.className = 'note'
      note.textContent = key

      const hue = (key.charCodeAt(0) - 97) * (360 / 26)
      note.style.background = `hsl(${hue}, 70%, 50%)`

      document.body.append(note)
    }
  })
}