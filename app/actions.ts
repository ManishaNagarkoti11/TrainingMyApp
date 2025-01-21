"use server"

export async function submitName(formData: FormData) {
  const name = formData.get("name") as string
  return `Hello ${name}!`
}

