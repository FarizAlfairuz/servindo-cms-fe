export const userLinks = {
  label: 'User',
  links: [
    { name: 'User List', to: '/dashboard/users' },
    { name: 'Changelog', to: '/dashboard/changelog/user' },
  ],
};

export const financeLinks = {
  label: 'Finance',
  links: [
    { name: 'Incomes', to: '/dashboard/income' },
    { name: 'Outcomes', to: '/dashboard/outcome' },
    { name: 'Financial Statement', to: '/dashboard/financial-statement' },
    { name: 'Balance', to: '/dashboard/balance' },
    { name: 'Changelog', to: '/dashboard/changelog/finance' },
  ],
};

export const marketingLinks = {
  label: 'Marketing',
  links: [
    { name: 'Sales', to: '/dashboard/sales' },
    { name: 'Customer List', to: '/dashboard/customer' },
    { name: 'Changelog', to: '/dashboard/changelog/marketing' },
  ],
};

export const purchasingLinks = {
  label: 'Purchasing',
  links: [
    { name: 'Purchase List', to: '/dashboard/purchase' },
    { name: 'Vendor List', to: '/dashboard/vendor' },
    { name: 'Changelog', to: '/dashboard/changelog/purchasing' },
  ],
};

export const supportLinks = {
  label: 'Support',
  links: [
    { name: 'Riwayat Service', to: '/dashboard/riwayat-service' },
    { name: 'Riwayat Perubahan', to: '/dashboard/riwayat-perubahan' },
  ],
};

export const itemLinks = {
  label: 'Items',
  links: [
    { name: 'Item List', to: '/dashboard/items' },
    { name: 'Leased Item List', to: '/dashboard/items/leased' },
  ],
};
