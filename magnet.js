function magneticButton(element) {
  const children = element.children[0]

  element.addEventListener('mousemove', e => {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element
    const left = e.pageX - offsetLeft
    const top = e.pageY - offsetTop
    const centerX = left - offsetWidth / 2
    const centerY = top - offsetHeight / 2
    const d = Math.sqrt(centerX**2 + centerY**2)

    gsap.to(element, 0.5, {
      x: centerX / 1.5,
      y: centerY / 1.5,
      ease: Elastic.easeOut
    })

    children.style.transform = `
      translate3d(${centerX / 4}px, ${centerY / 4}px, 0)
      rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg)
    `
  })

  element.addEventListener('mouseleave', () => {
    gsap.to(element, 1.2, {
      x: 0,
      y: 0,
      ease: Elastic.easeOut.config(1, 0.1)
    })
    children.style.transform = ''
  })
}

const a = document.querySelector('a')
magneticButton(a)
