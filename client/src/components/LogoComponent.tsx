import { Box } from '@mui/material'
import logo_react from '../assets/react.svg'

interface Props {
    size?: number
}

const LogoComponet : React.FC<Props> = (props) => {
  const { size } = props
  return (
    <>
        <Box
          component={'img'}
          src={logo_react}
          sx={{
            height: size ? size : 100,
            width: size ? size : 100,
            animation: 'spin 30s linear infinite',
            '@keyframes spin': {
                from: {
                    transform: 'rotate(0deg)',
                },
                to: {
                    transform: 'rotate(360deg)',
                },
            },
            }}
        />
    </>
  )
}

export default LogoComponet