---
title: "Mey Research group - team"
layout: gridlay
excerpt: "Mey Research group: Team members"
sitemap: false
permalink: /team/
---

# Group Members



## Team Lead

<div>
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/me2.jpg" class="img-responsive" width="20%" style="float: left" />
  <h4>Antonia Mey</h4>
  <i>Christina Miller Fellow, started Jan 2020 <br>email: [antonia.mey@ed.ac.uk](mailto:antonia.mey@ed.ac.uk)<br>
    A full CV is available [here]({{ site.url }}{{ site.baseurl }}/downloads/cv.pdf). </i>
  <ul style="overflow: hidden">
  <li> BSc Physics with Chemistry, Keele University </li>
  <li> PhD University of Nottingham with  <a href="https://www.nottingham.ac.uk/~ppzjpg/About.html">Juan Garrahan</a> </li>
  <li>Postdoc Freie Universität Berlin with <a href="https://www.mi.fu-berlin.de/en/math/groups/comp-mol-bio/index.html">Frank Noe</a> </li>
  <li> Postdoc University of Edinburgh with <a href="http://www.julienmichel.net/lab/">Julien Michel</a> </li>
 </ul>

 </div>






## Master and Bachelor Students
{% assign number_printed = 0 %}
{% for member in site.data.students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>
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

Are you interested in working on exiting challenges around anticmicrobial resistance looking at ways to combine machine learning and molecular simulations? 

Please get in touch by [email](mailto:antonia.mey@ed.ac.uk) to discuss different opportunities to join the group, or take a look at some of these PhD and Postdoc funding opportunities: 


### Applications for PhD and Postdoc positions
If you are interested in working with us as a PhD student or postdoc, please send me an [email](mailto:antonia.mey@ed.ac.uk). 
If there is no specific opening advertise take a look at some of the following opportunities for PhD students:   
* [University of Edinburgh Scholarship and Student Funding Services](https://www.ed.ac.uk/student-funding)   
* [Commonwealth Scholarships](http://cscuk.dfid.gov.uk)    
* [Fullbright Scholarships](http://us.fulbrightonline.org/home.html)       
* [Marshall Scholarships](http://www.marshallscholarship.org)     
* [Chevening scholarships](https://www.chevening.org/scholarships/)       
* [Scottish Overseas Research Students Awards Scheme](https://www.gov.uk/government/organisations/foreign-commonwealth-office/about#our-funding-programmes)   


And for Postdocs:   
* [Marie Curie Fellowship](https://ec.europa.eu/research/mariecurieactions/actions/individual-fellowships_en)   
* [Newton Fellowship](https://royalsociety.org/grants-schemes-awards/grants/newton-international/)   
* [Leverhulme fellowship](https://www.leverhulme.ac.uk)   

   
### Undergraduate student projects
The group is happy to accommodate students from various disciplines, not just Chemistry. Ideally suited candidates are students in Chemistry, Physics, Computer Science, Biochemistry or Biotechnology, provided you have keen interest in exploring the interplay between Biology, Chemistry, and computational modelling and machine learning.  

### Summer student projects
Please send me an [email](mailto:antonia.mey@ed.ac.uk) if you are interested in doing a summer research project to discuss possible available options. 

Deadlines for summer projects are usually quite early in the year (end of January). Here is a none exhaustive list of funding sources:

* [Royal Society of Chemistry](https://www.rsc.org/ScienceAndTechnology/Funding/undergraduate-bursary.asp)
* [Carnegie Trust](https://www.carnegie-trust.org/award-schemes/vacation-scholarships/)
* [Edinburgh University Vacation](https://uoe.sharepoint.com/sites/CSCE/AcademicAffairs/SitePages/College-Vacation-Scholarships.aspx)

### There are no current open positions! 
