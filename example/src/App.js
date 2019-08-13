import React from "react"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import {
  theme,
  UNICEFStyleProvider,
  UHeader,
  ULayout,
  USideBar,
  UContent,
  UHeaderRightButtons,
  UHeaderMainMenu,
  UHeaderLeftMenu,
} from "unicef-material-ui"
import "./App.css"
import {
  NavLinks,
  ColorsExample,
  FormExample,
  CardWithTabs,
  CardsExample,
  Alert,
  MenuItems,
  MenuTabs,
  LoadingButton,
} from "./components"
import { Tab } from "@material-ui/core"

export default function App() {
  const tabs = [
    { name: "Active", type: "normal", link: null },
    { name: "Disabled", type: "disabled", link: null },
    { name: "Directory", type: "normal", link: null },
  ]

  return (
    <MuiThemeProvider theme={theme}>
      <UNICEFStyleProvider>
        <ULayout>
          <UHeader
            color="white"
            bgColor="#1CABE2"
            applicationName="Application"
            logoUrl="https://unicef.github.io/unicef-material-ui/"
            // hideLogo={true}
            // hideLogoBorderLine={false}
            // logo={<img alt="user" src={avatar} />}
            showHumburgerMenu={true}
          >
            <UHeaderRightButtons>
              <NavLinks />
            </UHeaderRightButtons>
            <UHeaderMainMenu
              bgcolor="white"
              value={0}
              indicatorColor="primary"
              textColor="primary"
              // onChange={handleChange}
            >
              <Tab label="Active" />
              <Tab label="disabled" disabled href="/" />
              <Tab label="Directory" />
            </UHeaderMainMenu>
            <UHeaderLeftMenu>
              <MenuTabs />
            </UHeaderLeftMenu>
          </UHeader>
          <USideBar headerHeight={112}>
            <MenuItems />
          </USideBar>
          <UContent headerHeight={112}>
            {/* <ColorsExample /> */}
            <FormExample />
            <LoadingButton />
            <Alert />
            <CardWithTabs />
            <CardsExample />
          </UContent>
        </ULayout>
      </UNICEFStyleProvider>
    </MuiThemeProvider>
  )
}
