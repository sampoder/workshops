import { useColorMode } from 'theme-ui'

export default ({ theme }) => {
 const [colorMode, setColorMode] = useColorMode()
 setColorMode(theme)
 return null
 return (
   <style jsx global>{`
     .nav-color-switcher{
       display: none;
     }`}
   </style>
   )
}
