const findIP = (str) => {
  const octet = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)'
  const port = '(?:6553[0-5]|655[0-2]\\d|65[0-4]\\d\\d|6[0-4]\\d{3}|[1-5]\\d{4}|[1-9]\\d{0,3})'
  const ip = `(?<!\\d)(?<!\\d\\.)${octet}(?:\\.${octet}){3}(?::${port})?(?!\\d|\\.\\d|:\\d)`
  return str.match(new RegExp(ip, 'g')) || []
}