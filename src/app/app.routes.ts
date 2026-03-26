import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Bankaccount } from './bankaccount/bankaccount';
import { Loginbank } from './loginbank/loginbank';
import { Bankhomescreen } from './bankhomescreen/bankhomescreen';
import { Despreciation } from './despreciation/despreciation';
import { Classicloan } from './classicloan/classicloan';
import { Fixprincipal } from './fixprincipal/fixprincipal';
import { Termloan } from './termloan/termloan';
import { Activeloans } from './activeloans/activeloans';
import { Repayment } from './repayment/repayment';
import { Layout } from './layout/layout';

export const routes: Routes = [
    {path:'', redirectTo:'loginbank',pathMatch:'full'},
    {path:'loginbank', component: Loginbank},
    {
      path: '',
      component: Layout,
      children: [
        {path: 'bankhomescreen', component: Bankhomescreen },
        {path: 'activeloans', component: Activeloans },
        {path: 'repayment', component: Repayment },
        {path: 'despreciation', component: Despreciation},
        {path: 'classicloan', component: Classicloan},
        {path: 'fixprincipal', component: Fixprincipal},
        {path: 'termloan', component: Termloan},
        {path: 'bankaccount', component: Bankaccount},
      ]
    }
];



