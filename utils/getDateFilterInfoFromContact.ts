const dateFilterTitle: Record<string, string> = {
  "hoje": "Hoje",
  "ontem": "Ontem",
  "ultimos7dias": "Últimos 7 dias",
  "ultimos30dias": "Últimos 30 dias",
  "todos": "Todos"
}

export function selectTitleFromDateFilter(itemStatus: string) {
  return dateFilterTitle[itemStatus]
}
