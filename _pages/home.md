---
title: "IntelliStream Research Group - Home"
layout: homelay
excerpt: "IntelliStream Research Group"
sitemap: false
permalink: /
---
 <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/team.jpg" width="50%" style="float: center" />

From a high-level point of view, our research goal is to optimize and utilize distributed and parallel (stream) processing technology to better support existing and emerging big data applications. This is important to improve performance and reduce resource consumption, especially for the network connected world
by 5G, IoT, etc. The group has the following current research interests:

- <b>[Hardware-Conscious Data (Stream) Processing]</b> Multicore NUMA, GPU accelerated stream query processing, AMP-aware data stream compression, etc. ([ICDE'17](https://doi.org/10.1109/ICDE.2017.119), [SIGMOD'19](https://dl.acm.org/doi/10.1145/3299869.3300067), [SIGMOD Rec'20](https://dl.acm.org/doi/10.1145/3385658.3385662), [USENIX ATC'20](https://dl.acm.org/doi/abs/10.5555/3489146.3489189), [TPDS'21](https://doi.org/10.1109/TPDS.2021.3066407), [SIGMOD'21](https://dl.acm.org/doi/10.1145/3448016.3452793), [ICDE'23<sup>a</sup>](https://ieeexplore.ieee.org/document/10184565), [ICDE'23<sup>b</sup>](https://ieeexplore.ieee.org/document/10184703), [ICDE'23<sup>c</sup>](https://ieeexplore.ieee.org/document/10184828), [DEBS'23](https://dl.acm.org/doi/abs/10.1145/3583678.3596885), [arxiv'23](https://arxiv.org/pdf/2306.10228.pdf)) 
	- This is the place that we are <b> traditionally strong at </b>
	- In particular, we are recently looking at the topic of "hardware-conscious streaming machine learning algorithms"
	- Join us in this place if you love <i> design for computer-architecture-aware algorithm optimizations </i> and are <b>very strong</b> in C/C++ programming/CUDA/OpenCL

- <b>[Transactional Stream Processing]</b> Transactional stream processing frameworks and its applications in LLM, NFV etc. ([ICDE'20](https://doi.org/10.1109/ICDE48307.2020.00136), [SIGMOD'23](https://intellistream.github.io/downloads/papers/MorphStream_CR.pdf), [VLDBJ'23](https://rdcu.be/dncBQ), [arxiv'23<sup>a</sup>](https://arxiv.org/pdf/2307.10732.pdf), [arxiv'23<sup>b</sup>](https://arxiv.org/pdf/2307.08225.pdf), [arxiv'23<sup>c</sup>](https://arxiv.org/pdf/2307.12749.pdf))
	- This is the place that we are <b> exploring actively </b>
	- In particular, we are recently looking at the topic of "state management in NFV Platforms"
	- Join us in this place if you love <i> (large-scale, 100K+ LoC) novel database system design </i> and are <b>very good</b> in Java/C++ programming

- <b>[Data (Stream)-Centric AI]</b> High performance online machine learning, data stream mining, data stream preprocessing algorithms/systems ([BigMM'19](https://dl.acm.org/doi/abs/10.5555/3489146.3489189), [SIGMOD'23](https://dl.acm.org/doi/abs/10.1145/3589307), [EMNLP'23](https://intellistream.github.io/downloads/papers/sentistream_EMNLP.pdf), [arxiv'22](https://arxiv.org/abs/2203.12368), [arxiv'23](https://arxiv.org/abs/2309.04799))
	- This is the place that we are <b> exploring actively </b>
	- In particular, we are recently looking at the topic of "data management for retrieval-based large language models"
	- Join us in this place if you love to <i> explore the intersection between data management and data science </i> and are <b>good</b> in C++/Python programming and Machine Learning/Data Mining

<script>
  function toggleVisibility(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
</script>

<span onclick="toggleVisibility('ancillaryTopics')" style="cursor: pointer; color: blue; text-decoration: underline;">Ancillary topics</span>
<div id="ancillaryTopics" style="display:none;">
  <ul>
    <li><a href="https://doi.org/10.1109/ICDE.2017.166">MQO in CEP</a> (ICDE'17)</li>
    <li><a href="https://intellistream.github.io/downloads/papers/CompressStreamDB.pdf">CompressDB</a> (ICDE'23)</li>
    <li><a href="https://www.ijcai.org/proceedings/2020/610">Parking Prediction</a> (IJCAI'20, TKDE'21, VLDBJ'22)</li>
    <li><a href="https://dl.acm.org/doi/10.14778/2536274.2536319">APU Systems</a> (VLDB'13, VLDB'14, MASCOTS'15, TPDS'17)</li>
    <li><a href="https://ieeexplore.ieee.org/document/7425227">FPGA Systems</a> (TPDS'16)</li>
    <li><a href="https://ieeexplore.ieee.org/document/7877153">Cloud Resource Mgmt</a> (SC'16)</li>
  </ul>
</div>

<div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover" >
    <!-- Menu -->
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
        <li data-target="#carousel" data-slide-to="4"></li>
        <li data-target="#carousel" data-slide-to="5"></li>
        <li data-target="#carousel" data-slide-to="6"></li>
    </ol>

    <!-- Items -->
    <div class="carousel-inner" markdown="0">

        <div class="item active">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider/CStream.png" alt="Slide 1" style="height: 400px; width: 100%; object-fit: contain;" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider/PLStream.png" alt="Slide 2" style="height: 400px; width: 100%; object-fit: contain;" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider/MorphStreamResults.png" alt="Slide 3" style="height: 400px; width: 100%; object-fit: contain;" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider/BriskStream.png" alt="Slide 4" style="height: 400px; width: 100%; object-fit: contain;" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider/IntraStudy.png" alt="Slide 5" style="height: 400px; width: 100%; object-fit: contain;" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider/profiling.png" alt="Slide 6" style="height: 400px; width: 100%; object-fit: contain;" />
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