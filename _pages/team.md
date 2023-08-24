---
title: "IntelliStream Research group - team"
layout: gridlay
excerpt: "IntelliStream Research group: Team members"
sitemap: false
permalink: /team/
---

 <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/team.jpg" width="50%" style="float: center" />

# Group Members

## Team Lead

<div>
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/me3.jpg" class="img-responsive" width="10%" style="float: left" />
  <h4><a href='https://shuhaozhangtony.github.io/'>Shuhao Zhang</a></h4>  
  <i>Assistant Professor, Singapore University of Technology and Design Jan 2021 - <br>email: [shuhao_zhang@sutd.edu.sg](mailto:shuhao_zhang@sutd.edu.sg)<br>
    A full CV is available [here]({{ site.url }}{{ site.baseurl }}/downloads/cv.pdf). </i>
  <ul style="overflow: hidden">
  <li> BSc Computer Engineering, Nanyang Technological University </li>
  <li> PhD National University of Singapore with 
	<a href="https://www.comp.nus.edu.sg/~hebs/">Bingsheng He</a> 
  </li>
  <li>Postdoc Technische Universität Berlin with 
	<a href="https://www.dima.tu-berlin.de/menue/staff/volker_markl/">Volker Markl</a> 
  </li>
 </ul>
</div>

<br>

## PhD Students

{% assign number_printed = 0 %}
{% for member in site.data.phds %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>
  email: {{  member.email }}
  {{ member.info }}
  <ul style="overflow: hidden">
  
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<i> There are **three** (and potentially **four** or even more due to the incoming large grant awards) full PhD scholarships available. If you are interested, please email early. If you have no prior research experience, you are advised to first join as a visiting student or RA.</i>

## Research Staffs
{% assign number_printed = 0 %}
{% for member in site.data.staffs %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>    
   {{ member.info }}
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<i> We have one open position available for postdoc/RA.</i>

## Bachelor, Master and Visiting Students
{% assign number_printed = 0 %}
{% for member in site.data.visitors %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>    
   {{ member.info }}
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<i> We have a few positions available for visiting researcher/(stipend) student.</i>

## Frequent Collaborators
{% assign number_printed = 0 %}
{% for member in site.data.collaborators %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">

  <h4>{{ member.name }}</h4>    
   {{ member.info }}
  <ul style="overflow: hidden">

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

# Joining the group

We are a <b> system </b> research group. From a high-level point of view, our research goal is to optimize and utilize distributed and parallel stream processing technology to better support existing and emerging big data applications. This is important to improve performance and reduce resource consumption, especially for the network connected world
by 5G, IoT, etc. The group has the following current research interests:

- Hardware-conscious stream processing algorithms/systems ([ICDE'17](https://doi.org/10.1109/ICDE.2017.119), [SIGMOD'21](https://intellistream.github.io/downloads/papers/rdm044-zhangA.pdf), [USENIX ATC'20](https://dl.acm.org/doi/abs/10.5555/3489146.3489189), [TPDS'21](https://doi.org/10.1109/TPDS.2021.3066407), [ICDE'23](https://intellistream.github.io/downloads/papers/CStream_CR.pdf), [DEBS'23](https://intellistream.github.io/downloads/papers/Zeng-2023-CStream-DEBS_CR.pdf), [ICDE'23](https://intellistream.github.io/downloads/papers/Zhang-2023-OIJ-OpenMLDB_CR.pdf)) 
	- This is the place that we are <b> strong at </b>
	- Join us in this place if you love <i> design for computer-architecture-aware algorithm optimizations </i> and are <b>very strong</b> in C/C++ programming/CUDA/OpenCL
- Novel stream data management systems/frameworks ([ICDE'17](https://doi.org/10.1109/ICDE.2017.166), [ICDE'20](https://doi.org/10.1109/ICDE48307.2020.00136), [ICDE'23](https://intellistream.github.io/downloads/papers/CompressStreamDB.pdf), [SIGMOD'23](https://intellistream.github.io/downloads/papers/MorphStream_CR.pdf)) ([Arxiv](https://arxiv.org/abs/2208.09827))
	- This is the place that we are <b> good at </b>
	- Join us in this place if you love <i> (large-scale, 100K+ LoC) database system design </i> and are <b>very good</b> in Java/C++ programming 
- Online machine learning and data stream mining algorithms/systems ([BigMM'19](https://dl.acm.org/doi/abs/10.5555/3489146.3489189), [SIGMOD'23](https://intellistream.github.io/downloads/papers/Sesame_CR.pdf)) ([Arxiv](https://arxiv.org/abs/2203.12368))
	- This is the place that we have <b> succesfully attempted in </b>
	- Join us in this place if you love to <i> explore the intersection between data management and data science </i> and are <b>good</b> in C++/Python programming and Machine Learning/Data Mining
- Novel streaming approaches for network function virtualization and software-defined networks (on-going)
	- This is the place that we <b> foresee a gold mine unearthed </b>
	- Join us in this place if you love to explore the <i> intersection between data management and networking systems </i> and are <b>good</b> in programming and <b>no fear of risk!</b>

### Open Positions

**Expression of interest:** Please send an email to [Shuhao Zhang](mailto:shuhao_zhang@sutd.edu.sg). 

### Applications for PhD and Postdoc positions
Are you interested in working on exiting challenges in real-time data stream processing topics? We have many million-dollars-granted projects spaning from database, network, machine learning, and data mining domains.

Please get in touch by [email](mailto:shuhao_zhang@sutd.edu.sg) to discuss different opportunities to join the group, or take a look at some of these PhD and Postdoc funding opportunities: 

If you are interested in working with us as a PhD student or postdoc, please send me an [email](mailto:shuhao_zhang@sutd.edu.sg). 
If there is no specific opening advertise take a look at some of the following opportunities for PhD students:   
* [SUTD PhD Scholarship](https://sutd.edu.sg/Admissions/Graduate/Scholarships)   
* [SINGAPORE INTERNATIONAL GRADUATE AWARD (SINGA)](https://www.a-star.edu.sg/Scholarships/for-graduate-studies/singapore-international-graduate-award-singa)    
* [A*STAR COMPUTING AND INFORMATION SCIENCE (ACIS) SCHOLARSHIP](https://www.a-star.edu.sg/Scholarships/for-graduate-studies/a-star-cis-scholarship)       
* [FCP Master Student Scholarships](https://fcp.sutd.edu.sg/scholarships/)     
* [AISG PhD Scholarship](https://aisingapore.org/research/phd-fellowship-programme/)

And for Postdocs:   
* [A*STAR INTERNATIONAL FELLOWSHIP](https://www.a-star.edu.sg/Scholarships/for-post-doctoral-studies)   
* [SUTD Presidential Postdoctoral Fellowship (SUTD-PPF)](https://sutd.edu.sg/About/Overview/Careers-with-SUTD/SUTD-START-Programme/SUTD-Presidential-Postdoctoral-Fellowship)   

### Undergraduate student projects
The group is happy to accommodate talented undergraduate students. Due to the nature of our computer system research, ideally suited candidates shall be very strong in programming in C/C++/Java, provided you have keen interest in exploring the interplay between parallel programming, database management, and machine learning.  

## Former members
<div class="row">

<div class="col-sm-4 clearfix">
<h4>Staffs and PhD students</h4>
{% for member in site.data.alumni_members %}
   {{ member.name }}
   ({{ member.info }})
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Master students</h4>
{% for member in site.data.alumni_msc %}
   {{ member.name }}
   ({{ member.info }})
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Bachelor Students</h4>
{% for member in site.data.alumni_bsc %}
   {{ member.name }}
   ({{ member.info }})
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Visitors</h4>
{% for member in site.data.alumni_visitors %}
   {{ member.name }}
   ({{ member.info }})
{% endfor %}
</div>

</div>