import { NextPage } from "next";
import Image from 'next/image';
import cate01 from '../../public/main/cate02.png'
import cate02 from '../../public/main/cate02.png'
import cate03 from '../../public/main/cate03.png'
import cate04 from '../../public/main/cate04.png'
import cate05 from '../../public/main/cate05.png'
import cate06 from '../../public/main/cate06.png'
import img01 from '../../public/main/img01.png'
import icon00 from '../../public/main/icon00.png'
import line from '../../public/main/line.png'
import Link from "next/link";

const Intro: NextPage = () => {
  return (
    <div>
    <Link href="/">메인으로 가기</Link>
      <div className="section2 content">
            <div className="container">
                <div className="row">
                        <ul>
                            <li className="cate col-4 col-6">
                                <div>
                                    <p className="icon02"><Image src={cate01} alt=""/></p>
                                    <div className="tit01">소개</div>
                                    <div className="txt">24시간 정신 건강 상담, 마음의 안식처를 제공해드리겠습니다.</div>
                                </div>
                            </li>
                            <li className="cate col-4 col-6">
                                <div>
                                    <p className="icon02"><Image src={cate02} alt=""/></p>
                                    <div className="tit01">입원 관련 절차</div>
                                    <div className="txt">구급차량 24시간 대기 이송업무</div>
                                </div>
                            </li>
                            <li className="cate ccol-4 col-6">
                                <div>
                                    <p className="icon02"><Image src={cate03} alt=""/></p>
                                    <div className="tit01">인터넷 상담</div>
                                    <div className="txt">카카오톡 ID</div>
                                </div>
                            </li>
                            <li className="cate col-4 col-6">
                                <div>
                                    <p className="icon02"><Image src={cate04} alt=""/></p>
                                    <div className="tit01">중독치료</div>
                                    <div className="txt">알코올/도박/인터넷 게임중독</div>
                                </div>
                            </li>
                            <li className="cate col-4 col-6">
                                <div>
                                    <p className="icon02"><Image src={cate05} alt=""/></p>
                                    <div className="tit01">정신질환 치료</div>
                                    <div className="txt">조현병/조울증/치매/망상 등</div>
                                </div>
                            </li>
                            <li className="cate col-4 col-6">
                                <div>
                                    <p className="icon02"><Image src={cate06} alt=""/></p>
                                    <div className="tit01">부산/울산/경상남북도</div>
                                    <div className="txt">정신건강치료 상담(24시)</div>
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        </div>

        <div className="section3 content">
                <div className="Inner">
                    <div>
                        <h3>(주)중앙응급환자이송관과 상담하세요.</h3>
                        <p className="subP">010-2340-1931</p>
                    </div>
                </div>
        </div>

        <div className="bg_text_box">
            <div className="bg_text"><div>Ophthalmic clinic Ophthalmic clinic</div></div>
        </div>
        
        <div className="section4 content">
            <div className="container">
                <div className="row">

                    <div className="sect_title">
                        <h3 className="wow fadeInUp" data-wow-offset="300" >마음의 안식처를 제공해 드리겠습니다.</h3>
                    </div>
                    <div className="promise_text">
                        <p className="title wow fadeInUp serif" data-wow-delay="0.2s">
                            부산, 울산, 경상남북도
                            정신건강 치료를 위한 정신건강 응급 상담센터입니다.
                        </p>
                        <div className="text">
                            <p className="wow fadeInUp" data-wow-delay="0.4s">
                                정신건강문제, 조현병, 우울증, 알코올중독 관련 치료 절차, 입원절차에 관한 전반적인 내용을 상담 해드립니다.
                            </p>
                            <p className="wow fadeInUp" data-wow-delay="0.6s">
                               현대사회에서 발생하는 다양한 정신질환 문제로 자타해의 위험성, 일상생활의 붕괴 등을 치료함으로써 치료 후
                               일상생활로의 복귀를 위한 치료 방법을 알려드립니다.
                            </p>
                            <p className="wow fadeInUp" data-wow-delay="1.0s">
                                성인, 소아, 청소년, 노인 누구나 심리적인 고통, 정신질환은 갑작스럽게 찾아올 수 잇으며,
                                정신증, 알콜의존증, 신경증, 우울증 등 다양한 정신질환으로 고통 받는 환자 및 보호자들에게
                                도움을 드릴 수 있도록 운영하는 상담센터입니다.
                            </p>
                            <p className="wow fadeInUp" data-wow-delay="1.0s">
                                정신건강 치료와 회복을 위해 최선을 다하겠습니다. 감사합니다.
                            </p>
                        </div>
        
                    </div>
                </div>
            </div>
        </div>

        <div className="section5 content">
            <div className="container">
                <div className="row">
                   <div className="procedureImage col-sm-6 col-12"><Image src={img01} alt="" className="w-100"/></div>
                        <div className="procedureText col-sm-6 col-12">
                            <p className="txt01">정신건강의학과 입원 절차</p>
                            <p className="txt02">입원안내, 입원 절차, 준비사항 등의 내용
                                            강제입원을 원하시는 경우, 구급차량 안내,
                                            병원안내 이송업무 등을 통한 상담 도와드립니다.</p>
                            <p className="txt03">대명바이오는 건강하고 안전한 물을 인류에 공급하고자 많은 연구를 하고 있으며 고객의 건강을 우선시하는 기업이 되겠습니다.</p>
                        </div>
                </div> 
                
                <div>
                    <p>조현병,우울증,조울증,알코올중독,도박,게임중독,망상,의처증,의부증 등의<br/>
                        치료 상담,병원안내,강제입원 안내,입원 서류,구급차량안내 등 24시간 정신건강상담을 도와드립니다.
                    </p>
                </div>

                  <section className="page-content certification-sec1">
                    <div className="area-md">
                      <div className="common-subtitle-wrap mb-0">
                        <h3 className="title border-bottom">입원준비사항</h3>
                        <div className="desc-wrap no-gutter border-bottom">
                          <div className="flex-row gutter-10">
                            <div className="col-4-lg">
                              <h4 className="subtitle">환자의 주민등록등본 or 주민등록증 1부</h4>
                            </div>
                          </div>
                        </div>
                        <div className="desc-wrap no-gutter border-bottom">
                          <ul className="flex-row gutter-10">
                            <li className="col-4-lg">
                              <h4 className="subtitle">보호의무자임을 증명할 수 있는 서류 1부<span className="small">(시장,군수,구청장이 보호의무자인경우는 제외)</span></h4>
                            </li>
                            <li className="col-8-lg">
                              <div className="inner">
                                <p className="desc bullet-st2">주민등록등본</p>
                                <p className="desc bullet-st2">가족관계증명서</p>
                                <p className="desc bullet-st2">그밖에 보호의무자임을 증명할 수 있는 서류(생계 지원 근거 증빙서류)</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <div>
                      <div className="circle">
                        <div>
                            <Image src={icon00} alt=""/>
                            <p>정신건강의학과<br/>입원 유형</p>
                        </div>
                      </div>
    
                      <Image src={line} alt=""/>
    
                      <div className="type">
                        <ul className="enter">
                            <li>
                                <div className="left">자의입원</div>
                                <div className="right">스스로 입원에 대한 의사를 가지고 입원치료</div>
                            </li>
                            <li>
                                <div className="left">동의입원</div>
                                <div className="right">본인의 입원치료 의사와 직계보호자 1인의 동의를 받고 입원치료</div>
                            </li>
                            <li>
                                <div className="left">보호의무자입원</div>
                                <div className="right">본인의 입원치료 의사가 없이 직계보호자 2인의 동의를 받고 입원치료</div>
                            </li>
                        </ul>
                      </div>
                  </div>

            </div>    
        </div>
    </div>
  )
};

export default Intro;

