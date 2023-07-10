import { AiOutlineArrowRight } from 'react-icons/ai';

const FAQ = () => {

    return (
        <main data-aos="fade-up" className='max-w-[1000px] mx-auto px-3'>
            <h2 className='mb-5 text-3xl font-bold text-center text-black md:text-6xl'>Frequently Asked Questions</h2>
            <p className='text-xl font-semibold text-center text-[#575757] mb-14'>Check out the most commonly asked questions below. We hope you can find all of the answers that <br /> you need. If not, our team will be happy to help you.</p>
            <div className="mb-8 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <span className='flex justify-between'>
                        <h1 className='text-[#1f2559] text-xl md:text-3xl font-bold'>How long does it take to get started?</h1>
                        <AiOutlineArrowRight />
                    </span>
                </div>
                <div className="collapse-content ">
                    <p className='text-lg text-[#575757]'>After you get onboarded, we can usually get you started within 24-48 hours.</p>
                </div>
            </div>
            <div className="mb-8 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <span className='flex justify-between'>
                        <h1 className='text-[#1f2559] text-xl md:text-3xl font-bold'>I have been banned before, can you help?</h1>
                        <AiOutlineArrowRight />
                    </span>
                </div>
                <div className="collapse-content ">
                    <p className='text-lg text-[#575757]'>We can still support you even if you have been banned or disabled on Facebook previously. We will help you identify what went wrong and how you can rectify that issue.

                        If you have lost your personal profile, Business Manager or Page before, we also can refer you to various connections to help you get replacements.</p>
                </div>
            </div>
            <div className="mb-8 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <span className='flex justify-between'>
                        <h1 className='text-[#1f2559] text-xl md:text-3xl font-bold'>How much support do I get?</h1>
                        <AiOutlineArrowRight />
                    </span>
                </div>
                <div className="collapse-content ">
                    <p className='text-lg text-[#575757]'>All of our clients have a dedicated Slack channel with our Account Managers for direct support and self-service helpdesk with all of our latest strategies, notes on account structure, tips and techniques.</p>
                </div>
            </div>
            <div className="mb-8 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <span className='flex justify-between'>
                        <h1 className='text-[#1f2559] text-xl md:text-3xl font-bold'>Is there a spending limit?</h1>
                        <AiOutlineArrowRight />
                    </span>
                </div>
                <div className="collapse-content ">
                    <p className='text-lg text-[#575757]'>No, our Enterprise Level Agency Accounts do not have spending limits, even from day one.</p>
                </div>
            </div>
            <div className="mb-8 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <span className='flex justify-between'>
                        <h1 className='text-[#1f2559] text-xl md:text-3xl font-bold'>Can I run non-compliant campaigns?</h1>
                        <AiOutlineArrowRight />
                    </span>
                </div>
                <div className="collapse-content ">
                    <p className='text-lg text-[#575757]'>No, our agreement with Facebook states any new clients must be compliant with policy. Our team will work alongside our Facebook Rep to ensure that, before you launch, your website and creatives will not get disabled. No longer will you need to worry about waking up to another lost ad account.</p>
                </div>
            </div>
            <div className="mb-8 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <span className='flex justify-between'>
                        <h1 className='text-[#1f2559] text-xl md:text-3xl font-bold'>Can I pay with credit card?</h1>
                        <AiOutlineArrowRight />
                    </span>
                </div>
                <div className="collapse-content ">
                    <p className='text-lg text-[#575757]'>Yes, unlike other providers, we accept account top-ups with credit cards including American Express. You don't need to miss out on any points or cashback.</p>
                </div>
            </div>
            <div className="mb-8 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <span className='flex justify-between'>
                        <h1 className='text-[#1f2559] text-xl md:text-3xl font-bold'>How many accounts can I have?</h1>
                        <AiOutlineArrowRight />
                    </span>
                </div>
                <div className="collapse-content ">
                    <p className='text-lg text-[#575757]'>You can have an unlimited number of Agency Ad Accounts with us.</p>
                </div>
            </div>
            <div className="mb-8 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <span className='flex justify-between'>
                        <h1 className='text-[#1f2559] text-xl md:text-3xl font-bold'>How long do I get access?</h1>
                        <AiOutlineArrowRight />
                    </span>
                </div>
                <div className="collapse-content ">
                    <p className='text-lg text-[#575757]'>You get lifetime access to the accounts. You can use them whenever you like.</p>
                </div>
            </div>
            <div className="mb-8 collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title ">
                    <span className='flex justify-between'>
                        <h1 className='text-[#1f2559] text-xl md:text-3xl font-bold'>Who do you work with?</h1>
                        <AiOutlineArrowRight />
                    </span>
                </div>
                <div className="collapse-content ">
                    <p className='text-lg text-[#575757]'>We are open to working with any business owners who are looking to take their business to the next level with Facebook ads.

                        Our clients range from well-known brands and coaches to dropshipping, ecommerce and affiliate experts.</p>
                </div>
            </div>
        </main>

    );
};

export default FAQ;