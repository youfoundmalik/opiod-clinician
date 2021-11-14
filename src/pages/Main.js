import React from "react";
import Nav from "../components/Nav/Nav";
import "./Main.scss";
import ThreeInOne from "../components/pictureAndText/ThreeInOne";
import Section from "../components/common/section/Section";
import Heading from "../components/common/Heading";
import InnerDiv from "../components/common/innerDiv/InnerDiv";
import DoubleImg from "../components/doubleRoundImg/DoubleImg";
import ParagraphBox from "../components/common/ParagraphBox";
import SidebySide from "../components/sideByside/SideBySide";

import Graphics from "../images/Graphics";

const Main = () => {
  const welcome = {
    heading: "Opioids and Children’s Pain",
    mainImg: `${Graphics.svg[0]}`,
    message:
      "Opioids are one of many effective pain management tools for children with moderate to severe pain, but there is still uncertainty about the future harms from short-term prescribing. This is why healthcare providers need to prescribe responsibly.",
  };

  const consideration = [
    {
      heading: "When to Consider Prescribing Opioids",
    },
    {
      content:
        "Use non-opioid treatments first. Consider your patient's pain and the treatment context when developing your treatment plan.",
    },
    {
      content:
        "Always use physical and psychological interventions when treating pain.",
    },
    {
      content:
        "When opioids are required to treat moderate and severe pain, add them to non-opioid treatment and interventions.",
    },
    {
      imageOne: `${Graphics.svg[1]}`,
      imageTwo: `${Graphics.svg[2]}`,
    },
  ];
  const potentialRisk = [
    {
      heading: "Potential Risks",
      mainImg: `${Graphics.svg[3]}`,
    },
    {
      message:
        "Clinicians worry about the long-term effects of opioid use in children and youth. Asystematic review led by researchers at the University of Alberta shows that it is still unclear whether short-duration (≤2 weeks) therapeutic opioid use in children results in increased risk of non-medical use in the future. Some research indicates that exposure to therapeutic opioids at some point in a child's lifetime may be associated with non-medical opioid use.",
      other:
        "Other factors that may increase or decrease the risk of future harm are also unclear.",
    },
  ];
  const guidance = [
    { heading: "Prescribing Guidance for Children and Youth" },
    {
      imageOne: `${Graphics.svg[4]}`,
      imageTwo: `${Graphics.svg[5]}`,
    },
    {
      heading: "Health Canada recommends",
      list1: "No hydrocodone under 6",
      list2: "No codeine under 18",
      list3: "Limited tramadol under 18",
    },
  ];
  const talking = [
    {
      heading: "Talking with Patients and Families",
      mainImg: `${Graphics.svg[6]}`,
    },
    {
      message1:
        "With increasing media coverage of the opioid crisis, patients and families are likely to have questions and concerns about opioid treatment plans. ",
      message2:
        "It is important that healthcare providers take the time to discuss safe usage, storage, and disposal of opioid prescriptions with families.",
      message3:
        "Be sure to use clear and concise messaging in these conversations. ",
      message4: "Here are 4 things to make sure your patients know:",
      imageTwo: `${Graphics.svg[7]}`,
    },
  ];
  const usage = [
    {
      heading: "Minimizing the Risks",
      mainImg: `${Graphics.svg[8]}`,
    },
    {
      heading: "A discussion on safer usage should include:",
      list1:
        "The importance of taking the appropriate dose and following the medication schedule",
      list2: "When to seek reassessment for under-treated pain",
      list3:
        "The potential warning signs of inappropriate use, suchas using opioids to help with their mood or to reduce anxiety, or taking more than prescribed",
    },
  ];
  const storage = [
    { heading: "Discussing Safe Storage and Return" },
    { imageTwo: `${Graphics.svg[9]}` },
    {
      heading: "A discussion on safe storage should include:",
      list1:
        "The importance of keeping pills in their packaging and out of children’s reach",
      list2: "Safe return of remaining opioids to pharmacies",
    },
  ];
  const footer = [
    {
      heading: "Useful Links",
      subheading: "Find out more about opioids from these helpful resources:",
    },
    {
      text1: "ARCHE Systematic Review",
      link2:
        "https://trekk.ca/resources?utf8=%E2%9C%93&tag_id=D010147&external_resource_type=Quick_glance",
      text2: "TREKK Bottom Line Recommendations",
      link3:
        "https://www.google.com/url?q=https://www.canada.ca/en/health-canada/services/opioids.html&sa=D&source=docs&ust=1634759298037000&usg=AOvVaw37bkCsZ5xgKUmM5wV4drUb",
      text3: "Health Canada",
    },
    {
      size: "auto",
      spacing: "3% 16%",
      background: "#F2F2F2",
    },
    {
      message1:
        "PRODUCTION OF THIS MATERIAL WAS LED BY DR. MICHELE DYSON WITH ASSISTANCE FROM KELSEY WRIGHT AND ZAHRA SAIDHERSI",
      message2: "THIS MATERIAL WAS DEVELOPED WITH SUPPORT FROM:",
    },
    {
      maxwidth: "80%",
      imageOne: `${Graphics.png[0]}`,
      linkOne:
        "https://www.ualberta.ca/pediatrics/pediatric-research/affiliated-research-units/alberta-research-centre-for-health-evidence-arche/index.html",
      imageTwo: `${Graphics.png[1]}`,
      linkTwo: "https://www.ualberta.ca/research/our-research/index.html",
    },
    {
      maxwidth: "80%",
      imageOne: `${Graphics.png[2]}`,
      linkOne: "Trekk Logo: https://trekk.ca/",
      imageTwo: `${Graphics.png[3]}`,
      linkTwo: "https://www.antigravitydesignco.com/",
    },
    {
      size: "100%",
      spacing: "5% 0",
      background: "#F2F2F2",
    },
  ];

  return (
    <div className="body">
      <Nav />
      <div className="bodyArea">
        <Section id="welcome">
          <ThreeInOne
            altclass="intro"
            heading={welcome.heading}
            mainImg={welcome.mainImg}
          >
            <ParagraphBox altclass="intro-box">
              <p>{welcome.message}</p>
            </ParagraphBox>
          </ThreeInOne>
        </Section>
        <Section id="consideration">
          <Heading>{consideration[0].heading}</Heading>
          <InnerDiv altclass="consider">
            <p className="underline">{consideration[1].content}</p>
            <p className="underline">{consideration[2].content}</p>
            <p>{consideration[3].content}</p>
            <DoubleImg {...consideration[4]} />
          </InnerDiv>
          <div className="potential-risk">
            <ThreeInOne {...potentialRisk[0]}>
              <ParagraphBox>
                <p>{potentialRisk[1].message}</p>
                <p>{potentialRisk[1].other}</p>
              </ParagraphBox>
            </ThreeInOne>
          </div>
        </Section>
        <Section id="guidance">
          <Heading>{guidance[0].heading}</Heading>
          <DoubleImg {...guidance[1]} />
          <ParagraphBox altclass="box">
            <p>{guidance[2].heading}</p>
            <li>{guidance[2].list1}</li>
            <li>{guidance[2].list2}</li>
            <li>{guidance[2].list3}</li>
          </ParagraphBox>
        </Section>
        <Section id="talking">
          <ThreeInOne {...talking[0]}>
            <ParagraphBox>
              <span>{talking[1].message1}</span>
              <span>{talking[1].message2}</span>
              <span>{talking[1].message3}</span>
            </ParagraphBox>
            <SidebySide
              imageTwo={talking[1].imageTwo}
              sideOne={
                <ParagraphBox>
                  <p>{talking[1].message4}</p>
                </ParagraphBox>
              }
            />
          </ThreeInOne>
        </Section>
        <Section id="usage">
          <ThreeInOne {...usage[0]}>
            <ParagraphBox altclass="box">
              <p>{usage[1].heading}</p>
              <li>{usage[1].list1}</li>
              <li>{usage[1].list2}</li>
              <li>{usage[1].list3}</li>
            </ParagraphBox>
          </ThreeInOne>
        </Section>
        <Section id="storage">
          <Heading>{storage[0].heading}</Heading>
          <SidebySide
            {...storage[1]}
            sideOne={
              <ParagraphBox>
                <p>{storage[2].heading}</p>
                <li>{storage[2].list1}</li>
                <li>{storage[2].list2}</li>
              </ParagraphBox>
            }
          />
        </Section>
        <Section id="links">
          <InnerDiv altclass="heading">
            <Heading>{footer[0].heading}</Heading>
            <p>{footer[0].subheading}</p>
          </InnerDiv>
          <InnerDiv altclass="yellow">
            <p className="yellow-background">{footer[1].text1}</p>
            <p className="yellow-background">
              <a target="_blank" rel="noreferrer" href={footer[1].link2}>
                {footer[1].text2}
              </a>
            </p>
            <p className="yellow-background">
              <a target="_blank" rel="noreferrer" href={footer[1].link3}>
                {footer[1].text3}
              </a>
            </p>
          </InnerDiv>
          <InnerDiv altclass="inner-box">
            <ParagraphBox {...footer[2]}>
              <p>{footer[3].message1}</p>
            </ParagraphBox>
            <DoubleImg {...footer[4]} />
            <ParagraphBox {...footer[6]}>
              <p>{footer[3].message2}</p>
            </ParagraphBox>
            <DoubleImg {...footer[5]} />
          </InnerDiv>
          <div className="sectionTwo">
            <InnerDiv>
              <p className="link">
                Please feel free to distribute this infographic to your
                networks. Modifications of this work may not represent findings
                from this review. For any questions about modifications of this
                material, please contact{" "}
                <a href="mailto:mdyson@ualberta.ca">mdyson@ualberta.ca.</a>
              </p>
              <p>
                This infographic and the associated review were supported by the
                Emergency Strategic Clinical Network (ESCN) and the Maternal
                Newborn Child & Youth Strategic Clinical Network (MNCY) through
                Alberta Health Services.
              </p>
              <a
                target="_blank" rel="noreferrer"
                href="https://www.albertahealthservices.ca/scns/page9682.aspx"
              >
                <img src={Graphics.png[4]} alt="graphic" />
              </a>
            </InnerDiv>
          </div>
        </Section>
        <section className="footer">
          <InnerDiv altclass="copyright">
            <p>
              Ahrari, M, Ail, S, Hartling L, Dong K, Drendel AL, Klassen TP,
              Schreiner K, Dyson MP. Nonmedical opioid use following short-term
              therapeutic exposure in children: a systematic review. Pediatrics
              [accepted].
            </p>
          </InnerDiv>
        </section>
      </div>
    </div>
  );
};

export default Main;
