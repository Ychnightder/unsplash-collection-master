import { ref, onMounted } from 'vue'

export function useDarkMode() {

    const isDark = ref(false)

    const updateDOM = () => {
        document.documentElement.classList.toggle('dark', isDark.value)
    }

    const toggleTheme = () => {
        isDark.value = !isDark.value
        updateDOM()
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }

    onMounted(() => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme) {
            isDark.value = savedTheme === 'dark'
        } else {
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)')
            isDark.value = systemDark.matches

            systemDark.addEventListener('change', e => {
                isDark.value = e.matches
                updateDOM()
            })
        }

        updateDOM()
    })

    return { isDark, toggleTheme }
}
