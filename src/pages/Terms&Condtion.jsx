import React from 'react'


//components
import Footer from '../component/Footer'

const TermsCondition = () => {
    return (
        <div className='w-full h-fit'>
            <div className='h-fit  w-[80%] mx-auto text-[1rem] capitalize pb-[1rem] '>
                <p className='py-[2rem] capitalize text-[#020617] font-roboto font-[600] text-[1.8rem] text-center'>Terms & Condition</p>

                <h2>User Agreement</h2>
                <ul className='w-[90%] mt-[.5rem] mx-auto flex flex-col gap-[.5rem] list-disc '>
                    <li>This website is published and maintained by SnackBae Private Limited.</li>
                    <li> When you access, browse, or use any services provided by SnackBae, you accept the terms and conditions set forth below, without limitation.</li>
                    <li> These terms and conditions constitute the entire agreement between SnackBae and the user with respect to the use of the website, mobile application, or any other services offered solely by SnackBae.</li>
                </ul>


                <h2 className='mt-[.5rem]'>Terms of Use</h2>
                <p>By using the services of SnackBae, be it the website, mobile application, or concierge service, you acknowledge that you have read and understood the terms of use and agree to be bound by them. People under the age of 18 can use the services of SnackBae under the guidance of their parents and/or legal guardians.</p>

                <h2 className='mt-[.5rem]'>What Will We Do with Your Personal Information?</h2>
                <p>We at SnackBae are committed to protecting and ensuring your privacy. Only authorized employees within the company have access to the user's details and information and are prohibited from using this information for any personal or commercial use. Client records are regarded as confidential and will not be divulged to any third party, other than to appropriate authorities, only if legally required. We will not sell, share, or rent your personal information to any third party.</p>

                <h2 className='mt-[.5rem]'>What Is SnackBae Responsible For?</h2>
                <ul className='w-[90%] mt-[.5rem] mx-auto flex flex-col gap-[.5rem] list-disc '>
                    <li>SnackBae offers a reservation service between the user and the restaurants and does not accept any liability arising out of your dining experience regarding the quality of service or food, as it is delivered by a restaurant and not by SnackBae.</li>
                    <li>SnackBae is not liable for any changes in the menu or pricing at the restaurant.</li>
                    <li>The offers provided by SnackBae will only be applicable along with a meal at the restaurant and while making payment through SnackPay.</li>
                    <li>We will investigate any written complaints against a restaurant on receipt of complete details.</li>
                </ul>

                <h2 className='mt-[.5rem]'>Cancellation, No Show</h2>
                <ul className='w-[90%] mt-[.5rem] mx-auto flex flex-col gap-[.5rem] list-disc '>
                    <li>SnackBae is committed to providing convenient and quality service to our users.</li>
                    <li>To help us in maintaining this level of service, we urge our users to cancel or edit their reservations if they will be unable to reach the restaurant at the decided time.</li>
                </ul>

                <h2 className='mt-[.5rem]'>How Can I Cancel a Reservation?</h2>
                <p>You can cancel anytime in your profile section through the app, website, or simply contact us via call or WhatsApp at 704292143 (valid only for customers bookings in India).</p>

                <h2 className='mt-[.5rem]'>Will I Get Charged for Cancelling a Reservation?</h2>
                <p>SnackBae has no cancellation charges.</p>

                <h2 className='mt-[.5rem]'>What If I Don't Show Up for My Reservation?</h2>
                <ul className='w-[90%] mt-[.5rem] mx-auto flex flex-col gap-[.5rem] list-disc '>
                    <li>The first time you miss your reservation without canceling it, SnackBae will give you a warning.</li>
                    <li>If this happens for the second time, we will take necessary action such as suspension of your account.</li>
                    <li>Continuous 3 no-shows will result in the deactivation of the users’ accounts.</li>
                    <li>If, however, there is a misunderstanding and you were at the restaurant, please write to us at <a href="mailto:booking@snackbae.in">booking@snackbae.in</a> with a copy of the bill or any other proof of charge, and we will address the same immediately.</li>
                </ul>

                <h2 className='mt-[.5rem]'>User Communication Guidelines</h2>
                <ul className='w-[90%] mt-[.5rem] mx-auto flex flex-col gap-[.5rem] list-disc '>
                    <li>We send our users (registered with us) regular communications about our products and offers.</li>
                    <li>Users can send us an email to remove them from marketing communications; however, they will always get messages related to bookings, etc.</li>
                </ul>

                <h2 className='mt-[.5rem]'>User Recommending Guidelines</h2>
                <p>Here are a couple of things we would love for you to keep in mind while recommending dishes:</p>
                <ul className='w-[90%] mt-[.5rem] mx-auto flex flex-col gap-[.5rem] list-disc '>
                    <li>You can leave a recommendation about your experience by visiting the restaurant page & clicking on “Recommend This Place” or by clicking on the “Give a Recommendation” tab on the emailer you receive from us after you have dined at the restaurant.</li>
                    <li>Simply tap on the circles to recommend or not recommended.</li>
                    <li>You will be asked to enter your month of visit, type of visit & a suitable title for your review.</li>
                    <li>Then you can also write a review about your experience. You can also add pictures with your review. Please refrain from submitting plagiarized or false content and write your reviews based solely on your personal experiences and opinions.</li>
                    <li>Please refrain from using any foul, abusive, hateful or prejudiced language.</li>
                    <li>Please inform the appropriate authorities directly in case of any complaints with a business, especially those that involve illegal or inappropriate activities or health code violations.</li>
                </ul>

                <h2 className='mt-[.5rem]'>Photo Guidelines</h2>
                <p>Food & ambiance shots must be clear, in focus, and only of that particular restaurant. Duplicate, plagiarized, promotional, objectionable, or derogatory photographs should not be posted.</p>

                <h2 className='mt-[.5rem]'>Terms & Conditions</h2>
                <p>Everything you share, including reviews, photos, your profile, and comments are all subject to the guidelines above.</p>

                <h2 className='mt-[.5rem]'>Referral Program Terms & Conditions and FAQs</h2>
                <p>How many friends can I invite? What will be the maximum money that I can earn?</p>
                <p>You can invite any number of friends and earn money according to the following rules:</p>
                <ul className='w-[90%] mt-[.5rem] mx-auto flex flex-col gap-[.5rem] list-disc '>
                    <li>For every friend you refer to the SnackBae app, you’ll get a dining voucher.</li>
                    <li>Please note, referral invite is only valid for friends who have never registered/signed up on SnackBae app.</li>
                </ul>

                <h2 className='mt-[.5rem]'>Termination and Changes</h2>
                <p>SnackBae may suspend or terminate the referral program or a user’s ability to participate in the referral program at any time for any reason. SnackBae reserves the right to suspend accounts or remove wallet cash if we notice any activity that we believe is abusive, fraudulent, or in violation of the SnackBae Terms of Service. We reserve the right to review and investigate all referral activities and to suspend accounts or modify referrals in our sole discretion as deemed fair and appropriate.</p>

                <h3 className='mt-[.5rem]'>Updates to the Referral Terms & Conditions</h3>
                <p>SnackBae can update these terms at any time without prior notice. Referral terms & conditions will be modified to show the updated terms & conditions. Continued participation in the referral program after any modification shall constitute consent to such modification.</p>

                <h2 className='mt-[.5rem]'>User Policies</h2>
                <ul className='w-[90%] mt-[.5rem] mx-auto flex flex-col gap-[.5rem] list-disc '>
                    <li>SnackBae provides a service between users and restaurants and has no control or right over specific restaurant policies.</li>
                    <li>All users will have to agree and adhere to the policies set by the restaurants that they dine at.</li>
                    <li>These policies include but are not limited to; child policy, legal age of entry, and legal drinking age.</li>
                    <li>SnackBae will take utmost care while awarding the coupons. If at any coupon, SnackBae discovers that were wrongfully awarded, SnackBae reserves the right to cancel those coupons.</li>
                    <li>Users are prohibited from posting or transmitting any defamatory, obscene, pornographic, profane, threatening, or unlawful material or any content that could constitute or encourage conduct that would be considered a criminal offense or harm minors, contain software virus, give rise to civil liability, or otherwise violate any law.</li>
                    <li>SnackBae assumes no responsibility arising from the contents of any communications containing any such material.</li>
                    <li>SnackBae reserves the right to change, edit, or remove any user material or conversations that are illegal, indecent, or violate company policy.</li>
                    <li>SnackBae will fully cooperate with any law enforcement authorities or court order requesting or directing SnackBae to disclose the identity of anyone posting such remarks.</li>
                </ul>

                <h2 className='mt-[.5rem]'>What Can You Share on SnackBae?</h2>
                <ul className='w-[90%] mt-[.5rem] mx-auto flex flex-col gap-[.5rem] list-disc '>
                    <li>Users are prohibited from posting or transmitting any defamatory, obscene, pornographic, profane, threatening, or unlawful material or any content that could constitute or encourage conduct that would be considered a criminal offense or harm minors, contain software virus, give rise to civil liability, or otherwise violate any law.</li>
                    <li>SnackBae assumes no responsibility arising from the contents of any communications containing any such material.</li>
                    <li>SnackBae reserves the right to change, edit, or remove any user material or conversations that are illegal, indecent, or violate company policy.</li>
                    <li>SnackBae will fully cooperate with any law enforcement authorities or court order requesting or directing SnackBae to disclose the identity of anyone posting such remarks.</li>
                </ul>

                <h2 className='mt-[.5rem]'>What Can You Share on SnackBae?</h2>
                <ul className='w-[90%] mt-[.5rem] mx-auto flex flex-col gap-[.5rem] list-disc '>
                    <li>Users are prohibited from posting or transmitting any defamatory, obscene, pornographic, profane, threatening, or unlawful material or any content that could constitute or encourage conduct that would be considered a criminal offense or harm minors, contain software virus, give rise to civil liability, or otherwise violate any law.</li>
                    <li>SnackBae assumes no responsibility arising from the contents of any communications containing any such material.</li>
                    <li>SnackBae reserves the right to change, edit, or remove any user material or conversations that are illegal, indecent, or violate company policy.</li>
                    <li>SnackBae will fully cooperate with any law enforcement authorities or court order requesting or directing SnackBae to disclose the identity of anyone posting such remarks.</li>
                </ul>

                <h2 className='mt-[.5rem]'>What Are Log Files and What Do You Do With Them?</h2>
                <p>We use IP addresses to analyze trends, administer the site, track user’s movement, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information.</p>
                <p>Additionally, for systems administration, detecting usage patterns, and troubleshooting purposes, our web servers automatically log standard access information including browser type, access times/open mail, URL requested, and referral URL.</p>
                <p>This information is not shared with third parties and is used only within this company on a need-to-know basis. Any individually identifiable information related to this data will never be used in any way different to that stated above without your prior permission.</p>

                <h2 className='mt-[.5rem]'>What Are Cookies?</h2>
                <p>Like most interactive websites, this company’s website [or ISP] uses cookies to enable us to retrieve user details for each visit.</p>
                <p>Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate partners may also use cookies.</p>

                <h2 className='mt-[.5rem]'>What Are Links to the Website?</h2>
                <p>You may not create a link to any page of this website without our prior written consent. If you do create a link to a page of this website, you do so at your own risk, and the exclusions and limitations set out above will apply to your use of this website by linking to it.</p>

                <h2 className='mt-[.5rem]'>What Are Links From the Website?</h2>
                <p>We do not monitor or review the content of other party’s websites which are linked to this website. Opinions expressed or material appearing on such websites are not necessarily shared or endorsed by us, and SnackBae should not be regarded as the publisher of such opinions or material.</p>
                <p>Please be aware that we are not responsible for the privacy practices or content of these sites. We encourage our users to be aware when they leave our site and to read the privacy statements of these sites.</p>
                <p>You should evaluate the security of any other site connected to this site or accessed through this site yourself, before disclosing any personal information to them. SnackBae will not accept any responsibility for any loss or damage in whatever manner, howsoever caused, resulting from your disclosure of personal information to third parties.</p>
                <p>We reserve the right to remove any content that we deem inappropriate.</p>

                <h2 className='mt-[.5rem]'>How Can I Communicate With SnackBae?</h2>
                <p>You can call our 24-hour calling or WhatsApp service at 7044292143 for reservations or any additional queries (valid only for bookings in India). You may also write to us at contact@snackbae.in or go to the Contact Us page to submit your query, and we will respond to you as soon as possible. This company is registered in Kolkata, West Bengal, India.</p>

                <h2 className='mt-[.5rem]'>Waiver</h2>
                <p>Failure of either party to insist upon strict performance of any provision of this or any agreement or the failure of either party to exercise any right or remedy to which it, he, or they are entitled hereunder shall not constitute a waiver thereof and shall not cause a diminution of the obligations under this or any agreement. No waiver of any of the provisions of this or any agreement shall be effective unless it is expressly stated to be such and signed by both parties.</p>

                <h2 className='mt-[.5rem]'>How Often Does SnackBae Change Their Policies and Will We Be Notified?</h2>
                <p>SnackBae reserves the right to change these conditions from time to time as it sees fit, and your continued use of the site will signify your acceptance of any adjustment to these terms. If there are any changes to our privacy policy or terms of use, we will announce that these changes have been made on our home page and on other key pages on our site. If there are any changes in how we use our users’ personally identifiable information, notification by e-mail or postal mail will be made to those affected by this change. Any changes to our privacy policy will be posted on our website 7 days prior to these changes taking place. You are therefore advised to re-read this statement on a regular basis.</p>

                <h2 className='mt-[.5rem]'>What Is Your Spam Policy?</h2>
                <p>No communication tool is allowed to be used on the site to transmit any bulk communication.</p>

                <h2 className='mt-[.5rem]'>What Is Your Anti-Fraud Policy?</h2>
                <p>If we understand that a specific account is being used in a fraudulent manner (e.g., making many bookings and then cancelling or no shows, making multiple accounts just to get extra coupons or cashbacks etc), SnackBae reserves the rights to block the account. Decision of SnackBae will be final and binding in such scenarios.</p>

                <h2 className='mt-[.5rem]'>Is This Agreement Law Binding?</h2>
                <p>This agreement is governed by the laws of India. The courts of law in Kolkata shall have exclusive jurisdiction over any disputes arising under this agreement.</p>

                <h2 className='mt-[.5rem]'>How Can I Raise a Claim Against SnackBae?</h2>
                <p>Any cause of action arising out of or related to the SnackBae websites or mobile apps must commence within 15 days after the cause of action accrues; otherwise, it will be permanently barred.</p>

                <h2 className='mt-[.5rem]'>What Does My Acceptance of the Privacy Statement Mean?</h2>
                <p>By using SnackBae services, you signify your acceptance of this Privacy Statement. We reserve the right to modify this Privacy Statement at any time. We reserve the right to terminate your access or use of service without any prior notice or take any other legal action if anyone violates these terms. Right of admission to the website is reserved.</p>

                <p className='mt-[.5rem]'><strong>Copyright Infringement and Grievance Redressal Mechanism:</strong> SnackBae is not liable for any infringement of copyright arising out of materials posted on or transmitted through the site or mobile apps, or items advertised on the site or mobile apps, by end users or any other third parties.</p>


                <h2 className='mt-[.5rem]'>Redressal Mechanism</h2>
                <p>Any complaints, abuse, or concerns with regards to content and/or comment or breach of these terms shall be immediately informed to the designated grievance officer as mentioned below in writing or through email signed with the electronic signature to souptik.das@snackbae.in or can be sent to:</p>

                <p className='mt-[.5rem]'><strong>Mr. Souptik Das</strong><br />
                    BL-11, Jyangra, Rabindrapally,<br />
                    Kolkata - 700059<br />
                    Ph: +91 7044292143</p>

                <p>Please provide the following information in your complaint:</p>
                <ul className='w-[90%] mt-[.5rem] mx-auto flex flex-col gap-[.5rem] list-disc '>
                    <li>Identification of copyrighted work claimed to be infringed along with the address, telephone number, or email address of the claiming party.</li>
                    <li>A statement that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                    <li>A statement, under penalty of perjury, that the information in the notice of copyright infringement is accurate, and that the complaining party is authorized to act on behalf of the owner of the right that is allegedly infringed.</li>
                </ul>

                <p>These terms and conditions form part of the agreement between the client and SnackBae. Accessing this website and/or making a booking or agreement indicates your understanding, agreement to, and acceptance of the disclaimer notice and the full terms and conditions contained herein.</p>

                <p>© SnackBae - All Rights Reserved</p>

            </div>

            <Footer/>
        </div>
    )
}

export default TermsCondition