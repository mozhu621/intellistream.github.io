---
title: "IntelliStream Research Group - Research"
layout: textlay
excerpt: "IntelliStream Research Group - Research"
sitemap: false
permalink: /research/
---

## Research
***Stream Processing*** with 
	**Database Management** • **Networking Systems** • **Machine Learning** • **Data Mining** 

From a high-level point of view, our research goal is to optimize and utilize distributed and parallel stream processing technology to better support existing and emerging big data applications. This is important to improve performance and reduce resource consumption, especially for the network connected world
by 5G, IoT, etc. The group has the following current research interests:

- Novel stream data management systems/frameworks ([ICDE'17](https://doi.org/10.1109/ICDE.2017.166), [ICDE'17](https://doi.org/10.1109/ICDE.2017.119), [ICDE'20](https://doi.org/10.1109/ICDE48307.2020.00136), [USENIX ATC'20](https://dl.acm.org/doi/abs/10.5555/3489146.3489189), [TPDS'21](https://doi.org/10.1109/TPDS.2021.3066407), [ICDE'23](downloads/papers/CStream.pdf), [DEBS'23](downloads/papers/Zeng-2023-CStream-DEBS.pdf), [ICDE'23](downloads/papers/CompressStreamDB.pdf), [SIGMOD'23](downloads/papers/MorphStream.pdf)) 
- Hardware-conscious stream processing algorithms ([SIGMOD'21](downloads/papers/rdm044-zhangA.pdf), [ICDE'23](downloads/papers/Zhang-2023-OIJ-OpenMLDB_CR)) 
- Online machine learning and data stream mining algorithms ([Arxiv](https://arxiv.org/abs/2203.12368), [BigMM'19](https://dl.acm.org/doi/abs/10.5555/3489146.3489189), [SIGMOD'23]())
- Novel streaming approaches for network function virtualization and software-defined networks (on-going)

> [Our recommended reading list](https://intellistream.github.io/StreamProcessing_ReadingList/)

<div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover" >
    <!-- Menu -->
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>

    </ol>

    <!-- Items -->
    <div class="carousel-inner" markdown="0">
        <div class="item active">
            <img src="{{ site.url }}{{ site.baseurl }}/images/research/GSML4E.png" alt="Slide 1" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/research/MorphNFV.png" alt="Slide 2" />
        </div>
    </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


### Software
In general all our code can be found on [github](https://github.com/intellistream/), so feel free to have a look at what is going on at the moment. All feedback is always welcome. 

<b>MorphStream</b> - [MorphStream](https://github.com/intellistream/MorphStream) aims at building a scalable transactional stream processing engine on modern hardware. It allows ACID transactions to be run directly on streaming data. It shares similar project vision with Flink StreamingLedger from Data Artisans , but MorphStream emphsizes more on improving system performance leveraging modern multicore processors. 

> MorphStream is built based on our previous work of Briskstream (SIGMOD'19) and TStream (ICDE'20) but with significant changes: the codebase are exclusive. The code is still under active development and more features will be introduced. 

<!---[]({{ site.url }}{{ site.baseurl }}/images/research/AllianceDB_Logo.bmp){: style="width: 100px; float: left; border: 10px"}-->

<b>AllianceDB</b> - AllianceDB is an open-source benchmark suite for evaluating and improving stream operation algorithms on modern hardwares.
It is also an open source tool and all code is available on [github](https://github.com/intellistream/AllianceDB). 

<b>Sesame</b> - Sesame aims at building a scalable stream mining library on modern hardware.
It is also an open source tool and all code is available on [github](https://github.com/intellistream/sesame). 

### Hardware
Our team manages dozens of CPU and GPU servers. To access, you must be within the SUTD network. For details, please refer to this [google doc](https://docs.google.com/document/d/1RJfLIpZfG87YV8f3nkSh1OZ091oIQVM-/edit?usp=sharing&ouid=102789742341353270250&rtpof=true&sd=true).







