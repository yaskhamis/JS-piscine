export const getArchitects = () => {
  const architects = Array.from(document.querySelectorAll('a'))
  const others = Array.from(document.querySelectorAll('body *:not(a)'))
  return [architects, others]
}

export const getClassical = () => {
  const classical = Array.from(document.querySelectorAll('a.classical'))
  const nonClassical = Array.from(document.querySelectorAll('a:not(.classical)'))
  return [classical, nonClassical]
}

export const getActive = () => {
  const active = Array.from(document.querySelectorAll('a.classical.active'))
  const nonActive = Array.from(document.querySelectorAll('a.classical:not(.active)'))
  return [active, nonActive]
}

export const getBonannoPisano = () => {
  const bonanno = document.getElementById('BonannoPisano')
  const rest = Array.from(
    document.querySelectorAll('a.classical.active:not(#BonannoPisano)')
  )
  return [bonanno, rest]
}