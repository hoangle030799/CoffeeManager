// layout
import DefaultLayout from "../layouts/default-layout"

// pages
import Index from '../views/index'
import DashboardOne from '../views/dashboard-1';
import DashboardTwo from "../views/dashboard-2";
import DashboardThree from "../views/dashboard-3";
import DashboardFour from "../views/dashboard-4";
import { AppRouter } from './app-router';
import AllDoctors from "../views/modules/doctors/all-doctor";
import AddDoctors from "../views/modules/doctors/add-doctors";
import DoctorProfile from "../views/modules/doctors/doctor-profile";
import EditDoctors from "../views/modules/doctors/edit-doctors";
import Calendar from "../views/modules/calendar/calendar-page";
import Chat from "../views/modules/chat/chat";
// UI Elements
import UiColors from "../views/modules/ui-elements/ui-colors";
import UiTypography from "../views/modules/ui-elements/ui-typography";
import UiAlerts from "../views/modules/ui-elements/ui-alerts";
import UiBadges from "../views/modules/ui-elements/ui-badges";
import UiBreadcrumb from "../views/modules/ui-elements/ui-breadcrumb";
import UiButton from "../views/modules/ui-elements/ui-button";
import UiCards from "../views/modules/ui-elements/ui-cards";
import UiCarousel from "../views/modules/ui-elements/ui-carousel";
import UiVideo from "../views/modules/ui-elements/ui-video";
import UiGrid from "../views/modules/ui-elements/ui-grid";
import UiImage from "../views/modules/ui-elements/ui-image";
import UiListGroup from "../views/modules/ui-elements/ui-list-group";
import UiMedia from "../views/modules/ui-elements/ui-media";
import UiModal from "../views/modules/ui-elements/ui-modal";
import UiNotifications from "../views/modules/ui-elements/ui-notifications";
import UiPaginations from "../views/modules/ui-elements/ui-paginations";
import UiPopovers from "../views/modules/ui-elements/ui-popovers";
import UiProgressbar from "../views/modules/ui-elements/ui-progressbar";
import UiTabs from "../views/modules/ui-elements/ui-tabs";
import UiTooltips from "../views/modules/ui-elements/ui-tooltips";
// Form
import FormElements from "../views/modules/forms/form-elements";
import FormValidation from "../views/modules/forms/form-validation";
import FormSwitch from "../views/modules/forms/form-switch";
import FormCheckbox from "../views/modules/forms/form-Checkbox";
import FormRadio from "../views/modules/forms/form-radio";
// Form Wizard
import SimpleWizard from "../views/modules/form-wizard/simple-wizard";
import ValidateWizard from "../views/modules/form-wizard/validate-wizard";
import VerticalWizard from "../views/modules/form-wizard/vertical-wizard";
// Table
import BasicTable from "../views/modules/table/basic-table";
import DataTable from "../views/modules/table/data-table";
import EditableTable from "../views/modules/table/editable-table";
// Extra Page
import Timeline from "../views/modules/extra-pages/timeline";
import Invoice from "../views/modules/extra-pages/invoice";
import BlankPage from "../views/modules/extra-pages/blank-page";
import Pricing from "../views/modules/extra-pages/pricing";
import PricingOne from "../views/modules/extra-pages/pricing-1";
import Faq from "../views/modules/extra-pages/faq";
import AccountSetting from "../views/modules/extra-pages/account-setting";

// Map
import Google from "../views/modules/maps/google";
import VectorMap from "../views/modules/maps/vector";
// Icons
import Dripicons from '../views/modules/icons/dripicons';
import FontAwesomeIcons from '../views/modules/icons/font-awesome';
import LineAwesomeIcons from "../views/modules/icons/line-awesome";
import RemixIconPage from "../views/modules/icons/remixicon";
import UnIconsPage from "../views/modules/icons/unicons";
// Chart
import ApexChartPage from "../views/modules/charts/apexChart";
import EChartPage from "../views/modules/charts/eChart";
import AmCharts from "../views/modules/charts/amChart";
import ChartJsPage from "../views/modules/charts/chartJs";
import PrivacySetting from "../views/modules/extra-pages/privacy-setting";
export const IndexRouters = [
    {
        path: '',
        element : <DefaultLayout />,
        children : [
            {
                path: '',
                element : <Index />,
            },
            {
                path:'dashboard-1',
                element:<DashboardOne/>
            },
            {
                path:'dashboard-2',
                element:<DashboardTwo/>
            },
            {
                path:'dashboard-3',
                element:<DashboardThree/>
            },
            {
                path:'dashboard-4',
                element:<DashboardFour/>
            },
            {
                path:'/all-doctors',
                element:<AllDoctors/>
            },
            {
                path:'/add-doctors',
                element:<AddDoctors/>
            },
            {
                path:'/doctors-profile',
                element:<DoctorProfile/>
            },
            {
                path:'/edit-doctors',
                element:<EditDoctors/>
            },
            {
                path:'/calendar',
                element:<Calendar/>
            },
            {
                path:'/chat',
                element:<Chat/>
            },
            {
                path:'/ui-colors',
                element:<UiColors/>
            },
            {
                path:'/ui-typography',
                element:<UiTypography/>
            },
            {
                path:'/ui-alerts',
                element:<UiAlerts/>
            },
            {
                path:'/ui-badges',
                element:<UiBadges/>
            },
            {
                path:'/ui-breadcrumb',
                element:<UiBreadcrumb/>
            },
            {
                path:'/ui-button',
                element:<UiButton/>
            },
            {
                path:'/ui-cards',
                element:<UiCards/>
            },
            {
                path:'/ui-carousel',
                element:<UiCarousel/>
            },
            {
                path:'/ui-video',
                element:<UiVideo/>
            },
            {
                path:'/ui-grid',
                element:<UiGrid/>
            },
            {
                path:'/ui-image',
                element:<UiImage/>
            },
            {
                path:'/ui-list-group',
                element:<UiListGroup/>
            },
            {
                path:'/ui-media',
                element:<UiMedia/>
            },
            {
                path:'/ui-modal',
                element:<UiModal/>
            },
            {
                path:'/ui-notifications',
                element:<UiNotifications/>
            },
            {
                path:'/ui-paginations',
                element:<UiPaginations/>    
            },
            {
                path:'/ui-popovers',
                element:<UiPopovers/>
            },
            {
                path:'/ui-progressbar',
                element:<UiProgressbar/>
            },
            {
                path:'/ui-tabs',
                element:<UiTabs />
            },
            {
                path:'/ui-tooltips',
                element:<UiTooltips/>
            },
            // Forms
            {
                path:'/form-elements',
                element:<FormElements/>
            },
            {
                path:'/form-validation',
                element:<FormValidation/>
            },
            {
                path:'/form-switch',
                element:<FormSwitch/>
            },
            {
                path:'/form-Checkbox',
                element:<FormCheckbox/>
            },
            {
                path:'/form-radio',
                element:<FormRadio/>
            },
            // Form Wizard
            {
                path:'/simple-wizard',
                element:<SimpleWizard/>
            },
            {
                path:'/validate-wizard',
                element:<ValidateWizard/>
            },
            {
                path:'/vertical-wizard',
                element:<VerticalWizard/>
            },
            // Table
            {
                path:'/basic-table',
                element:<BasicTable/>
            },
            {
                path:'/data-table',
                element:<DataTable/>
            },
            {
                path:'/editable-table',
                element:<EditableTable/>
            },
            // Extra Pages
            {
                path:'/timeline',
                element:<Timeline/>
            },
            {
                path:'/invoice',
                element:<Invoice/>
            },
            {
                path:'/blank-page',
                element:<BlankPage/>
            },
            {
                path:'/pricing',
                element:<Pricing/>
            },
            {
                path:'/pricing-1',
                element:<PricingOne/>
            },
            {
                path:'/faq',
                element:<Faq/>
            },
            {
                path:'/account-setting',
                element:<AccountSetting/>
            },
            {
                path:'/privacy-setting',
                element:<PrivacySetting/>
            },
            // Maps
            {
                path:'/google-map',
                element:<Google/>
            },
            {
                path:'/vector-map',
                element:<VectorMap/>
            },
            // Charts
            {
                path:'/chartjs',
                element:<ChartJsPage/>
            },
            
            {
                path:'/e-chart',
                element:<EChartPage/>
            },
            {
                path:'/am-chart',
                element:<AmCharts/>
            },
            {
                path:'/apex-chart',
                element:<ApexChartPage/>
            },
            // Icons
            {
                path:'dripicons',
                element:<Dripicons/>
            },
            {
                path:'/font-awesome',
                element:<FontAwesomeIcons/>
            },
            {
                path:'/line-awesome',
                element:<LineAwesomeIcons/>
            },
            {
                path:'/remixicon',
                element:<RemixIconPage/>
            },
            {
                path:'/unicons',
                element:<UnIconsPage/>
            },
            
            ...AppRouter
        ],
    }
]