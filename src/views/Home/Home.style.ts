import appColors from '@/assets/theme/appColor'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles({
  name: 'HomeView',
  uniqId: 'home_view',
})((theme, _, classes) => {
  return {
    root: {
      position: 'relative',
      width: '100vw',
      height: '100%',
      minHeight: '100vh',
      backgroundColor: '#fff',
      fontFamily: 'Roboto',
    },

    navigation: {
      position: 'relative',
      width: '100%',
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 16px',

      '& h1': {
        fontSize: '18px',
        fontWeight: 700,
        color: '#3fb284',
      },
    },

    groupBtn: {
      position: 'relative',
      width: 'fit-content',
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      justifyContent: 'center',
      alignItems: 'stretch',
    },

    insideBtn: {
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      justifyContent: 'center',
      alignContent: 'center !important',
      fontWeight: 700,

      '& span': {
        fontSize: 14,
        color: '#000',
      },
    },

    tabsContainer: {
      width: '100%',
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      borderBottom: '1px solid #00000020',
    },

    tab: {
      padding: '8px 16px',
      color: '#919191',
      fontWeight: 700,
      cursor: 'pointer',
    },

    currentPage: {
      borderBottom: '2px solid #88d7b5',
    },

    halfSide: {
      width: '100%',
      paddingLeft: 20,
    },

    mainImage: {
      width: '100%',
      height: 'auto',
    },

    pageContent: {
      position: 'relative',
      width: '100%',
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
    },

    tableTitlesRow: {
      backgroundColor: appColors.light,
      border: '1px solid #000',

      '& .MuiGrid-item': {
        color: '#000',
        padding: '8px 4px',
        fontWeight: 700,
        fontSize: 12,
      },
    },

    tableContentRow: {
      border: '1px solid #000',

      '& .MuiGrid-item': {
        padding: '4px',
        fontSize: 12,

        '& .MuiOutlinedInput-root': {
          width: '100%',
          padding: '4px',

          [`& input`]: {
            color: '#000',
            padding: '4px 8px',
          },

          [`& fieldset`]: {
            borderRadius: 4,
          },
        },

        '& .MuiSelect-select': {
          padding: 4,
        },
      },
    },

    dropdownContainer: {
      '& .MuiOutlinedInput-root': {
        color: '#000',
        borderRadius: 4,
      },
    },

    dropdownRedContainer: {
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#ffaeb1',
        color: '#000',
        borderRadius: 4,
      },
    },

    dropdown: {
      color: '#000',
      padding: '8px 0px',
      backgroundColor: '#f0f0f0',
      zIndex: 2,

      '& .MuiButtonBase-root': {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 700,
      },
    },

    popup: {
      padding: 16,
      fontFamily: 'Roboto',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      color: '#000',
      borderRadius: 4,
      minWidth: 500,
      height: 'fit-content',
      maxHeight: '80vh',

      '& .MuiDialogTitle-root': {
        padding: 0,
      },

      '& .MuiDialogContentText-root': {
        fontSize: 16,
        color: '#0b0b0b',
      },

      '& .MuiDialogContent-root': {
        padding: 0,
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      },

      '& .MuiDialogActions-root': {
        padding: 0,
        marginTop: 12,

        '& button': {
          color: 'orange',
        },
      },

      '& .MuiTextField-root,.MuiFormControl-root': {
        '& label': {
          color: '#000',
          fontSize: 14,
        },

        '& input': {
          color: '#000',
          fontSize: 18,
          fontWeight: 700,
        },
      },
    },
  }
})

export default useStyles
