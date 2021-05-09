import React, { useContext, useEffect } from 'react'
import BigNumber from 'bignumber.js'

import { HarvestContext } from '../../Context/HarvestContext'
import Container from './FarmInfoStyles'
import { BluePanel } from '../bluePanel/BluePanel'
import { LoadingBluePanel } from '../bluePanel/components/loadingBluePanel/LoadingBluePanel.styles'
import { IAssetsInfo } from '../../types'
import { prettyCurrency, convertStandardNumber } from '../../utils/utils'
import { API } from '@/api'
import { farmAddress } from '@/constants/constants'

interface IProps {
  assets: IAssetsInfo[]
  savedGas: number
}

export const FarmInfo: React.FC<IProps> = ({ assets, savedGas }) => {
  const {
    state,
    currentExchangeRate,
    displayFarmInfo,
    baseCurrency,
    setState,
  } = useContext(HarvestContext)

  useEffect(() => {
    const getFarmPrice = async () => {
      const farmPrice = await API.getEtheriumPrice(farmAddress)

      setState((prevState) => ({
        ...prevState,
        farmPrice,
      }))
    }

    if (state.provider) {
      getFarmPrice()
    }
  }, [])

  const farmPriceValue = convertStandardNumber(
    state.farmPrice.toNumber() * currentExchangeRate,
    baseCurrency,
  )

  const stakedBalance = assets
    .reduce((acc, currentAsset) => {
      return acc.plus(currentAsset.value)
    }, new BigNumber(0))
    .multipliedBy(currentExchangeRate)

  const cellsData = [
    {
      value: prettyCurrency(stakedBalance.toNumber(), baseCurrency),
      text: 'Staked Balance',
    },
    { value: `${state.apy}%`, text: 'Profit Share APY' },
    { value: farmPriceValue, text: 'FARM price' },
    {
      value: prettyCurrency(savedGas, baseCurrency),
      text: 'Personal Saved Gas',
    },
    // TODO: fix 'farm earned'
    // { value: state.totalFarmEarned?.toFixed(6), text: 'Farm Earned' },
    { value: '-', text: 'Farm Earned' },
  ]

  const Cells = cellsData.map((item) => {
    return displayFarmInfo ? (
      <BluePanel key={item.text} value={item.value} text={item.text} />
    ) : (
      <LoadingBluePanel key={item.text} />
    )
  })

  return <Container>{Cells}</Container>
}
