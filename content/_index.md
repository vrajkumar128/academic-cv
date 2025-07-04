---
# Leave the homepage title empty to use the site title
title: ''
date: 2025-04-17
type: landing

sections:
  # - block: hero
  #   demo: true # Only display this section in the Hugo Blox Builder demo site
  #   content:
  #     title: Hugo Academic Theme
  #     image:
  #       filename: hero-academic.png
  #     cta:
  #       label: '**Get Started**'
  #       url: https://hugoblox.com/templates/
  #     cta_alt:
  #       label: Ask a question
  #       url: https://discord.gg/z8wNYzb
  #     cta_note:
  #       label: >-
  #         <div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star Hugo Blox Builder</a></div><div style="text-shadow: none;"><a class="github-button" href="https://github.com/HugoBlox/theme-academic-cv" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star the Academic template</a></div>
  #     text: |-
  #       **Generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 500,000+ sites.**

  #       **Easily build anything with blocks - no-code required!**

  #       From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.

  #       <!--Custom spacing-->
  #       <div class="mb-3"></div>
  #       <!--GitHub Button JS-->
  #       <script async defer src="https://buttons.github.io/buttons.js"></script>
  #   design:
  #     background:
  #       gradient_end: '#1976d2'
  #       gradient_start: '#004ba0'
  #       text_color_light: true
  - block: about.biography
    id: about
    content:
      title: About Me
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: experience
    id: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Undergraduate Teaching Assistant
          company: University of Pittsburgh School of Computing and Information
          company_url: 'https://www.sci.pitt.edu/'
          company_logo: pitt
          location: Pittsburgh, PA
          date_start: '2020-01-01'
          date_end: '2023-05-01'
          description: |2-
              * Served as a teaching assistant for [CMPINF 0401 Intermediate Programming](https://courses.sci.pitt.edu/courses/view/CMPINF-401), [CS 0445 Algorithms and Data Structures 1](https://courses.sci.pitt.edu/Sections/index/2224/public), [CS 1501 Algorithms and Data Structures 2](https://people.cs.pitt.edu/~skhattab/cs1501/index-2221.html), and [CS 1520 Web Applications](https://courses.sci.pitt.edu/courses/view/CS-1520).
              * Conducted weekly recitations and office hours, graded student assignments, and aided instructors with curriculum integrity and design.
        - title: Undergraduate Research Assistant
          company: Perfetti Lab, University of Pittsburgh Learning and Research Development Center
          company_url: 'https://www.lrdc.pitt.edu/perfettilab/index.html'
          company_logo: pitt
          location: Pittsburgh, PA
          date_start: '2021-12-31'
          date_end: '2022-12-31'
          description: |2-
              * Designed experimental materials used to study the significances of the [N400](https://en.wikipedia.org/wiki/N400_(neuroscience)) and [P600](https://en.wikipedia.org/wiki/P600_(neuroscience)) event-related brain potentials in reading comprehension processes.
              * Conducted IRB-approved EEG-based exams with research participants in the lab.
              * Processed and analyzed experimental data to draw conclusions that served as the basis of [my Bachelor of Philosophy thesis in psychology](https://d-scholarship.pitt.edu/47286/).
    design:
      columns: '2'
  - block: collection
    id: publications
    content:
      title: Selected Publications
      # text: |-
      #   {{% callout note %}}
      #   Quickly discover relevant content by [filtering publications](./publication/).
      #   {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  - block: accomplishments
    id: awards
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Awards & Honors'
      subtitle:
      # Date format: https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - date_end: ''
          date_start: '2025-04-25' # Date hack to make PBK appear at the top of the list, rectified in ../assets/js/custom.js
          description: "Earned induction into Pitt's chapter of the ΦBK national honor society as an undergraduate junior."
          icon: pitt
          organization: Xi Chapter of Pennsylvania, University of Pittsburgh
          organization_url: https://sites.pitt.edu/~pbk/
          title: Phi Beta Kappa (Distinguished Junior Member)
          url: 'https://www.pbk.org/'
          weight: 10
        - date_end: '2023-12-01'
          date_start: '2023-08-01'
          description: 'One of **ten** recipients of a financial award used to help continue [my climate-related ML research](https://pitthonors.blog/2023/09/29/my-curf-introduction/).'
          icon: pitt
          organization: University of Pittsburgh David C. Frederick Honors College
          organization_url: https://www.frederickhonors.pitt.edu/
          title: Chancellor's Undergraduate Research Fellowship
          url: https://pitthonors.blog/chancellors-undergraduate-research-fellowship/
          weight: 20
        - date_end: '2023-08-01'
          date_start: '2023-05-01'
          description: 'One of **two** recipients of a financial award used to support a research project on using artificial intelligence and machine learning to assess and mitigate the effects of anthropogenic climate change.'
          icon: pitt
          organization: University of Pittsburgh School of Computing and Information
          organization_url: https://www.sci.pitt.edu/
          title: SCI Summer Scholar
          url: https://www.sci.pitt.edu/research/undergraduate-research-scholars
          weight: 30
        - date_end: '2022-08-01'
          date_start: '2023-05-01'
          description: 'One of thirty-six recipients of a financial award used to support [a research project investigating the relationships of event-related potentials (ERPs) to reading comprehension processes in the brain](https://pitthonors.blog/2022/05/25/brackenridge-blog-post-1-beginnings/).'
          icon: pitt
          organization: University of Pittsburgh David C. Frederick Honors College
          organization_url: https://www.frederickhonors.pitt.edu/
          title: Brackenridge Fellowship
          url: https://pitthonors.blog/brackenridge-research-fellowship/
          weight: 40
        # - certificate_url: https://www.edx.org
        #   date_end: ''
        #   date_start: '2021-01-01'
        #   description: Formulated informed blockchain models, hypotheses, and use cases.
        #   icon: edx
        #   organization: edX
        #   organization_url: https://www.edx.org
        #   title: Blockchain Fundamentals
        #   url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
        # - certificate_url: https://www.datacamp.com
        #   date_end: '2020-12-21'
        #   date_start: '2020-07-01'
        #   description: ''
        #   icon: datacamp
        #   organization: DataCamp
        #   organization_url: https://www.datacamp.com
        #   title: 'Object-Oriented Programming in R'
        #   url: ''
    design:
      columns: '2'
  # - block: collection
  #   id: posts
  #   content:
  #     title: Recent Posts
  #     subtitle: ''
  #     text: ''
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       folders:
  #         - post
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: compact
  #     columns: '2'
  # - block: portfolio
  #   id: projects
  #   content:
  #     title: Projects
  #     filters:
  #       folders:
  #         - project
  #     # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  #     default_button_index: 0
  #     # Filter toolbar (optional).
  #     # Add or remove as many filters (`filter_button` instances) as you like.
  #     # To show all items, set `tag` to "*".
  #     # To filter by a specific tag, set `tag` to an existing tag name.
  #     # To remove the toolbar, delete the entire `filter_button` block.
  #     buttons:
  #       - name: All
  #         tag: '*'
  #       - name: Deep Learning
  #         tag: Deep Learning
  #       - name: Other
  #         tag: Demo
  #   design:
  #     # Choose how many columns the section has. Valid values: '1' or '2'.
  #     columns: '1'
  #     view: showcase
  #     # For Showcase view, flip alternate rows?
  #     flip_alt_rows: false
  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="demo" >}}
  #   design:
  #     columns: '1'
  # - block: collection
  #   id: featured
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     columns: '2'
  #     view: card
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     columns: '2'
  #     view: compact
  # - block: tag_cloud
  #   content:
  #     title: Popular Topics
  #   design:
  #     columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      # text: |-
      #   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
      # # Contact (add or remove contact options as necessary)
      # email: test@example.org
      # phone: 888 888 88 88
      # appointment_url: 'https://calendly.com'
      # address:
      #   street: 450 Serra Mall
      #   city: Stanford
      #   region: CA
      #   postcode: '94305'
      #   country: United States
      #   country_code: US
      # directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      # office_hours:
      #   - 'Monday 10:00 to 13:00'
      #   - 'Wednesday 09:00 to 10:00'
      # # Choose a map provider in `params.yaml` to show a map from these coordinates
      # coordinates:
      #   latitude: '37.4275'
      #   longitude: '-122.1697'  
      # contact_links:
      #   - icon: twitter
      #     icon_pack: fab
      #     name: DM Me
      #     link: 'https://twitter.com/Twitter'
      #   - icon: skype
      #     icon_pack: fab
      #     name: Skype Me
      #     link: 'skype:echo123?call'
      #   - icon: video
      #     icon_pack: fas
      #     name: Zoom Me
      #     link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: true
    design:
      columns: '2'
---
