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
import { ServiceLogPage } from '../app/Support/pages';

import { UserPage } from '../app/Users/pages';

import {
  CreateOperationalPage,
  CreateOtherIncomePage,
  CreateTaxPage,
} from '../app/Finance/pages/create';
import {
  CreateCustomerPage,
  CreateSalesPage,
} from '../app/Marketing/pages/create';
import {
  CreatePurchasePage,
  CreateVendorPage,
} from '../app/Purchasing/pages/create';
import { CreateServiceLogPage } from '../app/Support/pages/create';
import { CreateUserPage } from '../app/Users/pages/create';
import { CreateItemPage } from '../app/Item/pages/create';

import {
  UpdateOperationalPage,
  UpdateOtherIncomePage,
  UpdateTaxPage,
} from '../app/Finance/pages/update';
import {
  UpdateCustomerPage,
  UpdateSalesPage,
} from '../app/Marketing/pages/update';
import {
  UpdatePurchasePage,
  UpdateVendorPage,
} from '../app/Purchasing/pages/update';
import { UpdateServiceLogPage } from '../app/Support/pages/update';
import { UpdateUserPage } from '../app/Users/pages/update';
import { UpdateItemPage } from '../app/Item/pages/update';

import { ChangelogPage } from '../app/Changelog/pages';

import { ItemPage } from '../app/Item/pages';

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
    name: 'CreateItemPage',
    path: () => '/dashboard/items/create',
    component: CreateItemPage,
  },
  {
    name: 'UpdateItemPage',
    path: () => '/dashboard/items/:id',
    component: UpdateItemPage,
  },
];

export const financeRoutes = [
  {
    name: 'IncomePage',
    path: () => '/dashboard/pemasukan',
    component: IncomePage,
  },
  {
    name: 'OutcomePage',
    path: () => '/dashboard/pengeluaran',
    component: OutcomePage,
  },
  {
    name: 'BalancePage',
    path: () => '/dashboard/neraca',
    component: BalancePage,
  },
  {
    name: 'JournalPage',
    path: () => '/dashboard/jurnal',
    component: JournalPage,
  },
  {
    name: 'PrintPage',
    path: () => '/dashboard/cetak',
    component: PrintPage,
  },
  {
    name: 'CreateOperationalPage',
    path: () => '/dashboard/add/operasional',
    component: CreateOperationalPage,
  },
  {
    name: 'CreateOtherIncomePage',
    path: () => '/dashboard/add/pemasukan-lainnya',
    component: CreateOtherIncomePage,
  },
  {
    name: 'CreateTaxPage',
    path: () => '/dashboard/add/pajak',
    component: CreateTaxPage,
  },
  {
    name: 'UpdateOperationalPage',
    path: () => '/dashboard/update/operasional',
    component: UpdateOperationalPage,
  },
  {
    name: 'UpdateOtherIncomePage',
    path: () => '/dashboard/update/pemasukan-lainnya',
    component: UpdateOtherIncomePage,
  },
  {
    name: 'UpdateTaxPage',
    path: () => '/dashboard/update/pajak',
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
    path: () => '/dashboard/sales',
    component: SalesPage,
  },
  {
    name: 'CreateCustomerPage',
    path: () => '/dashboard/customer/create',
    component: CreateCustomerPage,
  },
  {
    name: 'CreateSalesPage',
    path: () => '/dashboard/add/penjualan',
    component: CreateSalesPage,
  },
  {
    name: 'UpdateCustomerPage',
    path: () => '/dashboard/customer/:id',
    component: UpdateCustomerPage,
  },
  {
    name: 'UpdateSalesPage',
    path: () => '/dashboard/update/penjualan',
    component: UpdateSalesPage,
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
    name: 'UpdatePurchasePage',
    path: () => '/dashboard/update/penjualan',
    component: UpdatePurchasePage,
  },
  {
    name: 'UpdateVendorPage',
    path: () => '/dashboard/vendor/:id',
    component: UpdateVendorPage,
  },
];

export const supportRoutes = [
  {
    name: 'ServiceLogPage',
    path: () => '/dashboard/riwayat-service',
    component: ServiceLogPage,
  },
  {
    name: 'CreateServiceLogPage',
    path: () => '/dashboard/add/riwayat-service',
    component: CreateServiceLogPage,
  },
  {
    name: 'UpdateServiceLogPage',
    path: () => '/dashboard/update/riwayat-service',
    component: UpdateServiceLogPage,
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
    path: () => '/dashboard/users/:id',
    component: UpdateUserPage,
  },
];
