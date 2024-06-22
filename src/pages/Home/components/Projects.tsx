import PangeaLogo from '../../../assets/images/project_images/pangea-logo.png';
import PangeaImageOne from '../../../assets/images/project_images/pangea-image-01.png';
import PangeaImageTwo from '../../../assets/images/project_images/pangea-image-02.png';
import VORPLogo from '../../../assets/images/project_images/vorp-logo.png';
import VORPDashboard from '../../../assets/images/project_images/vorp-dashboard.png';
import HKULogo from '../../../assets/images/project_images/hku-logo.png';
import HKUDashboard from '../../../assets/images/project_images/hku-donation.png';

export default function Projects() {
    return (
        <div id='projects' className="max-w-7xl mx-auto my-8 px-2">
            <div className="flex justify-center text-2xl md:text-3xl font-bold">Projects</div>
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
                <article className="bg-white dark:bg-gray-900 dark:text-white mb-4 break-inside break-inside-avoid p-6 rounded-xl flex flex-col bg-clip-border max-w-3xl">
                    <div className="flex pb-6 items-center justify-between">
                        <div className="flex">
                            <div className="flex items-center justify-center w-10 mr-4">
                                <img src={HKULogo} alt="The University of Hong Kong" className="max-w-full h-auto rounded-full  bg-gray-100" />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <a className="inline-block text-lg font-bold mr-2 cursor-pointer" href="#">HKU Donation</a>
                                </div>
                                <div className="text-black dark:text-white">
                                    Education Donation Form</div>
                                <div className="text-slate-500"><span className="text-sm">★Web </span></div>
                            </div>
                        </div>
                    </div>
                    <div className="content-stretch py-4">
                        <a className="flex" href="https://p309.visibleone.io/">
                            <img className="object-cover" src={HKUDashboard} />
                        </a>
                    </div>
                    <h2 className="text-3xl font-extrabold">
                        HKU Donation
                    </h2>
                    <div className="py-1"><strong className="text-black dark:text-white">by Visible One HK</strong></div><div className="py-4"><div></div></div><div className="pt-6"><div className="w-full"><a target="_blank" className="dark:bg-gray-700 dark:text-white py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75 cursor-pointer" href="https://p309.visibleone.io/">View</a></div></div>
                </article>
                <article className="bg-white dark:bg-gray-900 dark:text-white mb-4 break-inside break-inside-avoid p-6 rounded-xl flex flex-col bg-clip-border max-w-3xl">
                    <div className="flex pb-6 items-center justify-between">
                        <div className="flex">
                            <div className="flex items-center justify-center w-10 mr-4">
                                <img src={VORPLogo} alt="Visible One" className="max-w-full h-auto rounded-full  bg-gray-100" />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <a className="inline-block text-lg font-bold mr-2 cursor-pointer" href="#">VORP</a>
                                </div>
                                <div className="text-black dark:text-white">
                                    HRMS & Reporting</div>
                                <div className="text-slate-500"><span className="text-sm">★Web </span></div>
                            </div>
                        </div>
                    </div>
                    <div className="content-stretch py-4">
                        <a className="flex" href="https://vorp.visibleone.com">
                            <img className="object-cover" src={VORPDashboard} />
                        </a>
                    </div>
                    <h2 className="text-3xl font-extrabold">
                        VORP HRMS & Reporting
                    </h2>
                    <div className="py-1"><strong className="text-black dark:text-white">by Visible One HK</strong></div><div className="py-4"><div></div></div><div className="pt-6"><div className="w-full"><a target="_blank" className="dark:bg-gray-700 dark:text-white py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75 cursor-pointer" href="https://vorp.visibleone.com">View</a></div></div>
                </article>
                <article className="bg-white dark:bg-gray-900 dark:text-white mb-4 break-inside break-inside-avoid p-6 rounded-xl flex flex-col bg-clip-border max-w-3xl">
                    <div className="flex pb-6 items-center justify-between">
                        <div className="flex">
                            <div className="flex items-center justify-center w-10 mr-4">
                                <img src={PangeaLogo} alt="Pangea" className="max-w-full h-auto rounded-full  bg-gray-100" />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <a className="inline-block text-lg font-bold mr-2 cursor-pointer" href="#">Pangea Bay</a>
                                </div>
                                <div className="text-black dark:text-white">
                                    Group Sourcing</div>
                                <div className="text-slate-500"><span className="text-sm">★Web </span></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 content-stretch py-4">
                        <a className="flex" href="https://p209.visibleone.io/">
                            <img className="object-cover" src={PangeaImageOne} />
                        </a>
                        <a className="flex" href="https://p209.visibleone.io/">
                            <img className="object-cover" src={PangeaImageTwo} />
                        </a>
                    </div>
                    <h2 className="text-3xl font-extrabold">
                        Pangea Web Portal for Group Sourcing & Outlet Sharing
                    </h2>
                    <div className="py-1"><strong className="text-black dark:text-white">by Visible One HK</strong></div><div className="py-4"><div></div></div><div className="pt-6"><div className="w-full"><a target="_blank" className="dark:bg-gray-700 dark:text-white py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75 cursor-pointer" href="https://p209.visibleone.io/">View</a></div></div>
                </article>
                <article className="bg-white dark:bg-gray-900 dark:text-white mb-4 break-inside break-inside-avoid p-6 rounded-xl flex flex-col bg-clip-border max-w-3xl">
                    <div className="flex pb-6 items-center justify-between">
                        <div className="flex">
                            <div className="flex items-center justify-center w-10 mr-4">
                                <img src="https://raw.githubusercontent.com/aungthuoo/apis/main/projects/images/mallplus/logo.png" alt="Mall Plus Myanmar" className="max-w-full h-auto rounded-full  bg-gray-100" />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <a className="inline-block text-lg font-bold mr-2 cursor-pointer" href="#">Mall Plus Myanmar</a></div><div className="text-black dark:text-white">Food Order Platform</div><div className="text-slate-500"><span className="text-sm">★Android </span><span className="text-sm">★iOS </span><span className="text-sm">★Web app </span></div></div></div></div><div className="grid grid-cols-2 gap-1 content-stretch py-4"><a className="flex" href="https://mallplusmm.com"><img className="object-cover object-cover" src="https://raw.githubusercontent.com/aungthuoo/apis/main/projects/images/mallplus/customer-app/img-001.jpeg" /></a><a className="flex" href="https://mallplusmm.com"><img className="object-cover" src="https://raw.githubusercontent.com/aungthuoo/apis/main/projects/images/mallplus/customer-app/img-002.jpeg" /></a></div><h2 className="text-3xl font-extrabold">
                        Food Delivery Customer App</h2><div className="py-1"><strong className="text-black dark:text-white">Mall Plus</strong></div><div className="py-4"><div>A food order customer app is a mobile application that allows users to browse, order, and pay for food from various restaurants or food establishments. These apps are designed to provide a convenient and user-friendly experience for customers, enabling them to satisfy their food cravings with just a few taps on their smartphones. </div></div><div className="pt-6"><div className="w-full"><a target="_blank" className="dark:bg-gray-700 dark:text-white py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75 cursor-pointer" href="https://play.google.com/store/apps/details?id=com.mallplusmm.mallPlusCustomer&hl=en">View</a></div></div>
                </article>
                <article className="bg-white dark:bg-gray-900 dark:text-white mb-4 break-inside break-inside-avoid p-6 rounded-xl flex flex-col bg-clip-border max-w-3xl">
                    <div className="flex pb-6 items-center justify-between"><div className="flex"><div className="flex items-center justify-center w-10 mr-4"><img src="https://raw.githubusercontent.com/aungthuoo/apis/main/projects/images/mallplus/logo.png" alt="Mall Plus Myanmar" className="max-w-full h-auto rounded-full  bg-gray-100" /></div><div className="flex flex-col"><div className="flex items-center"><a className="inline-block text-lg font-bold mr-2 cursor-pointer" href="#">Mall Plus Myanmar</a></div><div className="text-black dark:text-white">Order Management Restaurant App</div><div className="text-slate-500"><span className="text-sm">★Android </span></div></div></div></div><div className="grid grid-cols-2 gap-1 content-stretch py-4"><a className="flex" href="https://play.google.com/store/apps/details?id=com.mallplusmm.restaurant&amp;hl=en"><img className="object-cover" src="https://raw.githubusercontent.com/aungthuoo/apis/main/projects/images/mallplus/restaurant-app/img-001.png" /></a><a className="flex" href="https://play.google.com/store/apps/details?id=com.mallplusmm.restaurant&amp;hl=en"><img className="object-cover" src="https://raw.githubusercontent.com/aungthuoo/apis/main/projects/images/mallplus/restaurant-app/img-002.png" /></a></div><h2 className="text-3xl font-extrabold">Food Delivery Restaurant App</h2><div className="py-1"><strong className="text-black dark:text-white">Mall Plus</strong></div><div className="py-4"><div>A food order restaurant app is a software application designed for smartphones and tablets that allows users to browse menus, place orders, and often pay for meals from restaurants. These apps can be used by both customers and restaurant owners to streamline the food ordering and delivery process.</div></div><div className="pt-6"><div className="w-full"><a target="_blank" className="dark:bg-gray-700 dark:text-white py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75 cursor-pointer" href="https://play.google.com/store/apps/details?id=com.mallplusmm.restaurant">View</a></div></div>
                </article>
                <article className="bg-white dark:bg-gray-900 dark:text-white mb-4 break-inside break-inside-avoid p-6 rounded-xl flex flex-col bg-clip-border max-w-3xl">
                    <div className="flex pb-6 items-center justify-between"><div className="flex"><div className="flex items-center justify-center w-10 mr-4"><img src="https://raw.githubusercontent.com/aungthuoo/apis/main/projects/images/mallplus/logo.png" alt="Mall Plus Myanmar" className="max-w-full h-auto rounded-full  bg-gray-100" /></div><div className="flex flex-col"><div className="flex items-center"><a className="inline-block text-lg font-bold mr-2 cursor-pointer" href="#">Mall Plus Myanmar</a></div><div className="text-black dark:text-white">Rider App</div><div className="text-slate-500"><span className="text-sm">★Android </span></div></div></div></div>
                    <div className="grid grid-cols-2 gap-1 content-stretch py-4"><a className="flex" href="https://play.google.com/store/apps/details?id=com.mallplusmm.biker&amp;hl=en"><img className="object-cover" src="https://raw.githubusercontent.com/aungthuoo/apis/main/projects/images/mallplus/biker-app/img-001.png" /></a><a className="flex" href="https://play.google.com/store/apps/details?id=com.mallplusmm.biker&amp;hl=en"><img className="object-cover" src="https://raw.githubusercontent.com/aungthuoo/apis/main/projects/images/mallplus/biker-app/img-002.png" /></a></div>
                    <h2 className="text-3xl font-extrabold">Food Delivery Biker App</h2><div className="py-1"><strong className="text-black dark:text-white">Mall Plus</strong></div><div className="py-4"><div>A food order rider app is a mobile application designed to facilitate and manage the delivery process for food delivery drivers (often referred to as riders). These apps are integral to the operations of food delivery services, helping to streamline and coordinate the logistics of picking up and delivering orders from restaurants to customers.</div></div><div className="pt-6"><div className="w-full"><a target="_blank" className="dark:bg-gray-700 dark:text-white py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75 cursor-pointer" href="https://play.google.com/store/apps/details?id=com.mallplusmm.biker&amp;hl=en">View</a></div></div>
                </article>

            </ul>
        </div>
    )
}