import { ref, watchEffect, onMounted } from 'vue'
const isDark = ref(false);

export function useDarkMode() {

    const toggleDark = () => {
        isDark.value = !isDark.value
        updateClass()
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }


    const updateClass = () => {
        if (isDark.value) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }


    onMounted(() => {
        const savedTheme = localStorage.getItem('theme')
        isDark.value = savedTheme === 'dark'
        updateClass()
    })

    watchEffect(() => {
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    })

    return { isDark, toggleDark }

}
