const statusColor: Record<string, string> = {
  "finalizado": "#00D492",
  "aberto": "#FFD230",
  "cancelado": "#C60036",
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
