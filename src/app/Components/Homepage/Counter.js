"use client"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './counter.css';

const StatsCounter = () => {
    const hasAnimated = true;
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    if (inView && !hasAnimated) {

    }

    return (
        <>
            <section className="counter-section sec-padding bg-lred py-5" ref={ref}>
                <div className="container">

                    <div className="row justify-content-center">
                        <div className='col-3 counter-box align-self-center'>
                            <div className="global-heading-sec">
                                <h2
                                    className="global-heading text-center italic"> Our Footprints
                                </h2>
                            </div>
                        </div>
                        <div className="col counter-box">
                            <div className="counter-label">Gowns Delivered</div>
                            <div className="counter-number">

                                {hasAnimated ? <CountUp start={0} end={2800} duration={2} /> : 0}
                            </div>
                        </div>
                        <div className="col counter-box">
                            <div className="counter-label">Our Followers</div>
                            <div className="counter-number">

                                {hasAnimated ? <CountUp start={0} end={66} duration={5} suffix="K" /> : 0}
                            </div>
                        </div>
                        <div className="col counter-box">
                            <div className="counter-label">Customers Globally</div>
                            <div className="counter-number" >
                                {hasAnimated ? <CountUp start={0} end={2000} duration={5} suffix="+" /> : 0}
                            </div>
                        </div>
                        <div className="col counter-box">
                            <div className="counter-label">Served Continents</div>
                            <div className="counter-number" >
                                {hasAnimated ? <CountUp start={0} end={5} duration={5} suffix="+" /> : 0}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
};

export default StatsCounter;
