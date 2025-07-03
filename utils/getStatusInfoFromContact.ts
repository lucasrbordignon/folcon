const statusColor: Record<string, string> = {
  "finalizado": "#0ead69",
  "aberto": "#33658a",
  "cancelado": "#ee4266",
}

const statusTitle: Record<string, string> = {
  "finalizado": "Finalizados",
  "aberto": "Abertos",
  "cancelado": "Cancelados",
  "todos": "Todos"
}


export function selectColorFromStatus(itemStatus: string) {
  return statusColor[itemStatus]
}

export function selectTitleFromStatus(itemStatus: string) {
  return statusTitle[itemStatus]
}
