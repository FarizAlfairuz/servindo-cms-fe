import {LoginPage} from '../app/Auth/pages'
import {IncomePage, BalancePage,JournalPage,OutcomePage,PrintPage} from '../app/Finance/pages'
import {CustomerPage,SalesPage} from '../app/Marketing/pages'
import {PurchasePage,VendorPage} from '../app/Purchasing/pages'
import {ServiceLogPage} from '../app/Support/pages'
import {UserPage} from '../app/Users/pages'

import {CreateOperationalPage,CreateOtherIncomePage,CreateTaxPage} from '../app/Finance/pages/create'
import {CreateCustomerPage,CreateSalesPage} from '../app/Marketing/pages/create'
import {CreatePurchasePage,CreateVendorPage} from '../app/Purchasing/pages/create'
import {CreateServiceLogPage} from '../app/Support/pages/create'
import {CreateUserPage} from '../app/Users/pages/create'

import {UpdateOperationalPage,UpdateOtherIncomePage,UpdateTaxPage} from '../app/Finance/pages/update'
import {UpdateCustomerPage,UpdateSalesPage} from '../app/Marketing/pages/update'
import {UpdatePurchasePage,UpdateVendorPage} from '../app/Purchasing/pages/update'
import {UpdateServiceLogPage} from '../app/Support/pages/update'
import {UpdateUserPage} from '../app/Users/pages/update'

export const routes = [
    {
        name: "LoginPage",
        path: "/",
        element: <LoginPage />
    }
]