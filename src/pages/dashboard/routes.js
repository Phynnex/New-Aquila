import ScanPage from "./Scan"
import DashboardPage from "./home"
import MonitorPage from "./monitor"
import ProtectPage from "./protect"
import SettingsPage from "./Settings"
import Dashboard_Upload from "./upload/upload"
import Scan_report from "../dashboard/scan_result"
import ScanReportIOS from "../../components/DashboardHome/Scan/scanReportIOS"
import ScanDetails from "../../components/DashboardHome/Scan/ScanDetails"
import ScanDetailsIOS from "../../components/DashboardHome/Scan/ScanDetailsIOS"
import Upload_result from "../dashboard/upload_result"
// import LogoutPage from "./Logout"






import {
    DASHBOARDHOME,
	SCAN,
	MONITOR,
	PROTECT,
	SETTINGS,
    // LOGOUT
	DASHBOARD_UPLOAD,
	SCAN_RESULT,
	SCAN_RESULT_IOS,
	SCAN_DETAILS,
	SCAN_DETAILS_IOS,
	UPLOAD_RESULT
	
	
} from "./ROUTESCONTS"


export const dashboardRoutes = [
	{
		path: DASHBOARDHOME,
		component: DashboardPage,
		exact: true,
		protected: true
	},
	{
		path: SCAN,
		component: ScanPage,
		exact: true,
		protected: true
	},
	{
		path: MONITOR,
		component: MonitorPage,
		exact: true,
		protected: true
	},{
		path: PROTECT,
		component: ProtectPage,
		exact: true,
		protected: true
	},
	{
		path: SETTINGS,
		component: SettingsPage,
		exact: true,
		protected: true
	},
	{
		path: DASHBOARD_UPLOAD,
		component: Dashboard_Upload,
		exact: true,
		protected: true
	},
	{
		path: SCAN_RESULT,
		component: Scan_report,
		exact: true,
		protected: true
	},
	{
		path: SCAN_RESULT_IOS,
		component: ScanReportIOS,
		exact: true,
		protected: true
	},
	{
		path: SCAN_DETAILS,
		component: ScanDetails,
		exact: true,
		protected: true
	},
	{
		path: SCAN_DETAILS_IOS,
		component: ScanDetailsIOS,
		exact: true,
		protected: true
	},
	{
		path: UPLOAD_RESULT,
		component: Upload_result,
		exact: true,
		protected: true
	},
	
]
