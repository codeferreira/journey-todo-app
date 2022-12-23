export function Task() {
  return `
  <li id="" class="flex items-center justify-between">
    <p>Task here</p>
    <div class="flex items-center gap-3 text-2xl">
      <button class="flex items-center justify-center text-green-600"><i class="ph-pencil"></i></button>
      <button class="flex items-center justify-center text-red-600"><i class="ph-trash"></i></button>
    </div>
  </li>
  `
}