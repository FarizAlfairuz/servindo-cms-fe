import { LoginPage } from '../app/Auth/pages';
import {
  IncomePage,
  BalancePage,
  JournalPage,
  OutcomePage,
  PrintPage,
} from '../app/Finance/pages';
import { CustomerPage, SalesPage } from '../app/Marketing/pages';
import { PurchasePage, VendorPage } from '../app/Purchasing/pages';

import { UserPage } from '../app/Users/pages';

import {
  CreateOtherIncomePage,
  CreateOtherOutcomePage,
} from '../app/Finance/pages/create';
import {
  CreateCustomerPage,
  CreateSalesPage,
} from '../app/Marketing/pages/create';
import {
  CreatePurchasePage,
  CreateVendorPage,
} from '../app/Purchasing/pages/create';
import { CreateUserPage } from '../app/Users/pages/create';

import {
  UpdateOperationalPage,
  UpdateOtherIncomePage,
  UpdateTaxPage,
} from '../app/Finance/pages/update';
import {
  UpdateCustomerPage,
  UpdateServicePage,
} from '../app/Marketing/pages/update';
import { UpdateVendorPage } from '../app/Purchasing/pages/update';
import { UpdateUserPage } from '../app/Users/pages/update';

import { ChangelogPage } from '../app/Changelog/pages';

import { ItemPage, LeasedItemPage } from '../app/Item/pages';

export const routes = [
  {
    name: 'LoginPage',
    path: () => '/login',
    component: LoginPage,
  },
];

export const changelogRoutes = [
  {
    name: 'ChangelogPage',
    path: () => '/dashboard/changelog/:category',
    component: ChangelogPage,
  },
];

export const itemRoutes = [
  {
    name: 'ItemPage',
    path: () => '/dashboard/items',
    component: ItemPage,
  },
  {
    name: 'LeasedItemPage',
    path: () => '/dashboard/leased-items',
    component: LeasedItemPage,
  },
];

export const financeRoutes = [
  {
    name: 'IncomePage',
    path: () => '/dashboard/income/:tab?',
    component: IncomePage,
  },
  {
    name: 'OutcomePage',
    path: () => '/dashboard/outcome/:tab?',
    component: OutcomePage,
  },
  {
    name: 'BalancePage',
    path: () => '/dashboard/balance',
    component: BalancePage,
  },
  {
    name: 'JournalPage',
    path: () => '/dashboard/financial-statement',
    component: JournalPage,
  },
  {
    name: 'PrintPage',
    path: () => '/dashboard/print/:name',
    component: PrintPage,
  },

  {
    name: 'CreateOtherIncomePage',
    path: () => '/dashboard/other-incomes/create',
    component: CreateOtherIncomePage,
  },
  {
    name: 'CreateOtherOutcomePage',
    path: () => '/dashboard/other-outcome/create/:tab?',
    component: CreateOtherOutcomePage,
  },

  {
    name: 'UpdateOperationalPage',
    path: () => '/dashboard/operational/:id',
    component: UpdateOperationalPage,
  },
  {
    name: 'UpdateOtherIncomePage',
    path: () => '/dashboard/other-incomes/:id',
    component: UpdateOtherIncomePage,
  },
  {
    name: 'UpdateTaxPage',
    path: () => '/dashboard/tax/:id',
    component: UpdateTaxPage,
  },
];

export const marketingRoutes = [
  {
    name: 'CustomerPage',
    path: () => '/dashboard/customer',
    component: CustomerPage,
  },
  {
    name: 'SalesPage',
    path: () => '/dashboard/sales/:tab?',
    component: SalesPage,
  },
  {
    name: 'CreateCustomerPage',
    path: () => '/dashboard/customer/create',
    component: CreateCustomerPage,
  },
  {
    name: 'CreateSalesPage',
    path: () => '/dashboard/sale/create',
    component: CreateSalesPage,
  },
  {
    name: 'UpdateCustomerPage',
    path: () => '/dashboard/customer/:id',
    component: UpdateCustomerPage,
  },
  {
    name: 'UpdateServicePage',
    path: () => '/dashboard/service/:id',
    component: UpdateServicePage,
  },
];

export const purchasingRoutes = [
  {
    name: 'PurchasePage',
    path: () => '/dashboard/purchase',
    component: PurchasePage,
  },
  {
    name: 'VendorPage',
    path: () => '/dashboard/vendor',
    component: VendorPage,
  },
  {
    name: 'CreatePurchasePage',
    path: () => '/dashboard/purchase/create',
    component: CreatePurchasePage,
  },
  {
    name: 'CreateVendorPage',
    path: () => '/dashboard/vendor/create',
    component: CreateVendorPage,
  },
  {
    name: 'UpdateVendorPage',
    path: () => '/dashboard/vendor/:id',
    component: UpdateVendorPage,
  },
];

export const userRoutes = [
  {
    name: 'UserPage',
    path: () => '/dashboard/users',
    component: UserPage,
  },
  {
    name: 'CreateUserPage',
    path: () => '/dashboard/users/create',
    component: CreateUserPage,
  },
  {
    name: 'UpdateUserPage',
    path: () => '/dashboard/users/:id/:tab?',
    component: UpdateUserPage,
  },
];
