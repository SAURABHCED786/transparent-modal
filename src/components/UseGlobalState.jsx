import { Avatar, Card, DataTable, Grid, Layout, Page, Scrollable, Text } from '@shopify/polaris'
import { Select } from 'antd'
import React, { useEffect } from 'react'
import { createGlobalState } from 'react-hooks-global-state'
import useSWR, { mutate } from 'swr'

// Multilingual
import i18n from "i18next";
import tEn from "../locales/en/translateion.json"
import tDe from "../locales/de/translateion.json"
import tFr from "../locales/fr/translateion.json"
import tPl from "../locales/pl/translateion.json"
import tHi from "../locales/hi/translateion.json"
import { useTranslation, initReactI18next } from "react-i18next";

const { setGlobalState, useGlobalState } = createGlobalState({
  defaultCurrency: 'usd',
  language: 'en'
})
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: tEn
      },
      de: {
        translation: tDe
      },
      pl: {
        translation: tPl
      },
      fr: {
        translation: tFr
      },
      hi: {
        translation: tHi
      }

    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
const fetcher = (...args) => fetch(...args).then(res => res.json());
const UseGlobalState = () => {
  // Multilingual
  const { t } = useTranslation()
  const [defaultCurrency] = useGlobalState("defaultCurrency")
  const [language] = useGlobalState("language")

  const temp = [];
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${defaultCurrency}`
  const { data, error } = useSWR(url, fetcher)

  const optionCurrency = [
    {
      value: 'usd',
      label: 'USD'
    },
    {
      value: 'eur',
      label: 'EUR'
    },
    {
      value: 'pln',
      label: 'PLN'
    }
  ]
  const optionLanguage = [
    {
      value: 'en',
      label: 'EN'
    },
    {
      value: 'de',
      label: 'DE'
    },
    {
      value: 'pl',
      label: 'PL'
    },
    {
      value: 'fr',
      label: 'FR'
    },
    {
      value: 'hi',
      label: 'HI'
    }

  ]

  const handleCurrencyChange = (e) => {
    setGlobalState("defaultCurrency", e)
  }

  const handleLangChange = (e) => {
    setGlobalState("language", e)
  }

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])


  data?.forEach(currency => {
    temp.push([<Avatar source={currency.image} />, currency.id, currency.current_price.toLocaleString("en-EN", { style: 'currency', currency: defaultCurrency })])
  });

  return (
    <div>
      <Page fullWidth>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12 }}>
            <Layout >
              <Layout.Section >
                <div style={{ marginBottom: "15px", marginTop: "-20px" }}>
                  <Card title={t('welcome')}>
                    <Card.Section>
                      <Layout>
                        <Layout.Section oneHalf>
                          <Card title={t('currency')} actions={[{
                            content: (<Select
                              defaultValue={optionCurrency[0]}
                              onChange={handleCurrencyChange}
                              style={{ width: 120 }}
                              options={optionCurrency}
                            />)
                          }]}>
                            <Card.Section>
                              <Text>{t('changeTheCurrency')}</Text>
                            </Card.Section>
                          </Card>
                        </Layout.Section>
                        <Layout.Section oneHalf>
                          <Card title={t('Language')} actions={[{
                            content: (<Select
                              defaultValue={optionLanguage[0]}
                              onChange={handleLangChange}
                              style={{ width: 120 }}
                              options={optionLanguage}
                            />)
                          }]}>
                            <Card.Section>
                              <Text>{t('changeTheLanguage')}</Text>
                            </Card.Section>
                          </Card>
                        </Layout.Section>
                      </Layout>
                    </Card.Section>
                  </Card>
                </div>
              </Layout.Section>
            </Layout>
          </Grid.Cell>
        </Grid>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12 }}>
            <div style={{ margin: "auto", width: '50%' }}>
              <Card>
                <Scrollable shadow style={{ height: '350px' }} focusable>
                  <DataTable
                    columnContentTypes={[
                      'text',
                      'text',
                      'text',
                    ]}
                    headings={[
                      <strong>{t('currencyImage')}</strong>,
                      <strong>{t('currencyName')}</strong>,
                      <strong>{t('currency')}</strong>,
                    ]}
                    rows={temp}
                    stickyHeader
                  />
                </Scrollable>
              </Card>
            </div>
          </Grid.Cell>
        </Grid>
      </Page>
    </div>
  )
}
export default UseGlobalState
