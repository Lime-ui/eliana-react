export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!">
                    <img src="/assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                    <img src="/assets/" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
                </a>

                <div className="w-max mx-auto text-center">
                    <div className="flex justify-center mb-2">
                        <img src="./assets/mail_icon.png" alt="" className="w-16 h-16 dark:hidden" />
                        <img src="/assets/mur2.png" alt="" className="w-16 h-16 hidden dark:block" />
                    </div>
                    <a href="mailto:contact@prebuiltui.com" className="text-base">murungiprecious05@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com" target="_blank"></a><a href="https://themewagon.com" target="_blank"></a> • All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a href="#!">GitHub</a></li>
                    <li><a href="#!">LinkedIn</a></li>
                    <li><a href="#!">Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}