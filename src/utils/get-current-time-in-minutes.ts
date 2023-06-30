export function getCurrentTimeInMinutes() {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  const currentMinutes = currentDate.getMinutes()
  const currentTimeInMinutes = currentHour * 60 + currentMinutes

  // currentTimeInMinutes contém a hora atual do dia em minutos

  return currentTimeInMinutes
}
