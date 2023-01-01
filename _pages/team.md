---
title: "IntelliStream Research group - team"
layout: gridlay
excerpt: "IntelliStream Research group: Team members"
sitemap: false
permalink: /team/
---

# Group Members

## Team Lead

<div>
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/me3.jpg" class="img-responsive" width="10%" style="float: left" />
  <h4>Shuhao Zhang</h4>  
  <i>Assistant Professor, Singapore University of Technology and Design Jan 2021 - <br>email: [shuhao_zhang@sutd.edu.sg](mailto:shuhao_zhang@sutd.edu.sg)<br>
    A full CV is available [here]({{ site.url }}{{ site.baseurl }}/downloads/CV.pdf). </i>
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

# Joining the group

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
<h4>Postdocs and PhD students</h4>
{% for member in site.data.alumni_members %}
{{ member.name }}
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Master students</h4>
{% for member in site.data.alumni_msc %}
{{ member.name }}
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Bachelor Students</h4>
{% for member in site.data.alumni_bsc %}
{{ member.name }}
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Visitors</h4>
{% for member in site.data.alumni_visitors %}
{{ member.name }}
{% endfor %}
</div>

</div>
