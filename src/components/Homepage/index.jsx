import React from 'react'
import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'
import {
        SecTrustContent,
        OurTeamInfo,
       } from '../../data/data-containers/HomeDemo6/data-HomeDemo6.js';

import RoadmapInfo from '../../data/data-containers/HomeDemo6/data-RoadmapInfo.json';

import '../style/HomeDemo6.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../components/HeroSection'
import AboutOther from '../../components/AboutOther'

import Whitepaper from '../../components/Whitepaper'
import TokenDistribution from '../MintTokens'
import Roadmap from '../../components/Roadmap'
import OurTeam from '../../components/OurTeam'
import TrainingOpportunities from '../../components/TrainingOpportunities'

import SecTrust from '../SecTrust'
import Platform from '../Platform'

const Homepage = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        <Header Title="Homepage" />
        <SecHeroSection
          ClassSec="hero-section moving section-padding"
          ClassDiv="col-12 col-lg-6 col-md-12"
          specialHead="Creative landing page template"
          title="Decenteralized ICO and Crypto Trading Platform"
          link1="Whitepaper"
          link2="Buy Token"
        />
        <div className="clearfix" />
        <SecTrust data={SecTrustContent} />
        <div className="clearfix" />
        <AboutOther
            ClassTitle="gradient-text"
        />
        <TrainingOpportunities
            ClassSpanTitle="gradient-text blue"
        />
        <TokenDistribution
            ClassSpanTitle="gradient-text blue"
        />
        <OurTeam
            data={OurTeamInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <Platform/>
        <div className="clearfix" />
        <Whitepaper
            
        />
        <Roadmap
            data={RoadmapInfo}
            ClassSpanTitle="gradient-text blue"
        />
        <FooterPages
            ClassSpanTitle="gradient-text blue"
        />
      </div>
    );
};

export default Homepage