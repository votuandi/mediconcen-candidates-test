/* eslint-disable @next/next/no-img-element */
import useStyles from './Home.style'
import theme from '@/assets/theme'
import { Page } from '@/types/apiResponse.type'
import { pageApi } from '@/utils/api'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { rootShouldForwardProp } from '@mui/material/styles/styled'
import { formatPrice } from '@/utils/helpers/common'

export default function Home() {
  const [pageList, setPageList] = useState<Page[]>([])
  const [currentTab, setCurrentTab] = useState<number>(0)
  const [isShowPopup, setShowPopup] = useState<boolean>(false)
  const [selectedParticularName, setSelectedParticularName] = useState<string | null>(null)

  const handleClickTab = (index: number) => {
    setCurrentTab(index)
  }

  const handleSelectParticular = (name: string) => {
    if (currentTab === 1) {
      setSelectedParticularName(name)
    }
  }

  const handleClickOpenPopup = () => {
    setShowPopup(true)
  }

  const handleClickClosePopup = () => {
    setShowPopup(false)
  }

  let getPageList = async () => {
    try {
      let res = await pageApi.getList({
        params: {},
      })
      if (res.status === 200 && res.data.success) {
        setPageList(res.data.data.pages)
      }
    } catch (error) {
      console.log(error)
    }
  }

  let FetchData = async () => {
    await getPageList()
  }

  useEffect(() => {
    FetchData()
  }, [])

  useEffect(() => {
    if (selectedParticularName) {
      handleClickOpenPopup()
    }
  }, [selectedParticularName])

  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.navigation}>
        <h1>Scan Results</h1>
        <div className={classes.groupBtn}>
          <Button variant="contained" color="primary" sx={{ color: '#000', borderRadius: 0, padding: ' 8px 20px', paddingLeft: 4 }}>
            <div className={classes.insideBtn}>
              <KeyboardArrowLeftIcon sx={{ width: '16px', height: '16px' }} />
              <span>Back</span>
            </div>
          </Button>
          <Button variant="contained" color="primary" sx={{ color: '#000', borderRadius: 0, padding: ' 8px 20px', paddingRight: 4 }}>
            <div className={classes.insideBtn}>
              <span>Right</span>
              <KeyboardArrowRightIcon sx={{ width: '16px', height: '16px' }} />
            </div>
          </Button>
        </div>
      </div>
      <div className={classes.tabsContainer}>
        {pageList.map((page, index) => {
          return <span className={`${classes.tab} ${index === currentTab && classes.currentPage}`} key={index} onClick={() => handleClickTab(index)}>{`PAGE ${index + 1}`}</span>
        })}
      </div>
      <Grid container sx={{ width: '100%' }}>
        {/* Left Side */}
        <Grid item xs={6} className={classes.halfSide}>
          <img className={classes.mainImage} src={pageList.length > currentTab ? (pageList[currentTab].fileName ? pageList[currentTab].fileName : '') : ''} alt="" />
        </Grid>
        {/* Right Side */}
        <Grid item xs={6} className={classes.halfSide} sx={{ display: 'flex', flexDirection: 'column', paddingRight: 1 }}>
          {/* Table Titles row */}
          <Grid container className={classes.tableTitlesRow}>
            <Grid item xs={2}>
              Charge Date
            </Grid>
            <Grid item xs={3}>
              Particulars
            </Grid>
            <Grid item xs={5}>
              Match Items
            </Grid>
            <Grid item xs={2}>
              Amount
            </Grid>
          </Grid>
          {/* Table Content rows */}
          {pageList.length > currentTab &&
            pageList[currentTab].items &&
            pageList[currentTab].items.map((row, index) => {
              return (
                <Grid container className={classes.tableContentRow} key={index}>
                  <Grid item xs={2}>
                    <TextField variant="outlined" type="date" sx={{ width: '100%' }} value={new Date(row.chargeDate).toLocaleDateString('en-CA')} />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      variant="outlined"
                      sx={{ width: '100%' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <ControlPointIcon sx={{ cursor: 'pointer' }} onClick={() => handleSelectParticular(row.particularsEn)} />
                          </InputAdornment>
                        ),
                      }}
                      value={row.particularsEn}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <FormControl
                      fullWidth
                      className={row.matchOptions[0].value.toLowerCase() === row.particularsEn.toLowerCase() ? classes.dropdownContainer : classes.dropdownRedContainer}
                    >
                      <Select
                        MenuProps={{
                          classes: {
                            paper: classes.dropdown,
                          },
                        }}
                        sx={{ color: '#000' }}
                        id="demo-simple-select"
                        value={row.matchOptions[0].id}
                        // onChange={handleChange}
                      >
                        {row.matchOptions.map((option, optInd) => {
                          return (
                            <MenuItem value={option.id} key={optInd}>
                              {option.value}
                            </MenuItem>
                          )
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <TextField variant="outlined" value={formatPrice(row.netAmount)} />
                  </Grid>
                </Grid>
              )
            })}
        </Grid>
      </Grid>
      <Dialog
        open={isShowPopup}
        onClose={handleClickClosePopup}
        PaperProps={{
          classes: {
            root: classes.popup,
          },
        }}
      >
        <DialogTitle>Add New Particular</DialogTitle>
        <DialogContentText>To add this new particular to database</DialogContentText>
        <DialogContent>
          <TextField autoFocus value={selectedParticularName} label="Item Name" type="text" fullWidth variant="standard" />
          <TextField label="Hospital Int Code" type="text" fullWidth variant="standard" />
          <FormControl variant="standard">
            <InputLabel>Fee For</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Fee For"
            ></Select>
          </FormControl>
          <TextField label="Benefit Type 1" type="text" fullWidth variant="standard" />
          <TextField label="Benefit Type 2" type="text" fullWidth variant="standard" />
          <TextField label="Benefit Type 3" type="text" fullWidth variant="standard" />
          <TextField label="Benefit Type 4" type="text" fullWidth variant="standard" />
          <TextField label="Benefit Type 5" type="text" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClosePopup}>Cancel</Button>
          <Button onClick={handleClickClosePopup}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
