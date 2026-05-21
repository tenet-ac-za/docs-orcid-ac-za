---
title: "ORCID Course Slides"
url: "/orcid-course-librarians/slides/"
sidebar_nav: "sidebar-orcid-course"
page_class: "orcid-course-page orcid-slides-page"
page_body_class: "orcid-course-body"
---

## Module Slideshow

Use this page to present any module in slide format.

<div class="slide-topbar">
  <label for="module-picker">Choose module:</label>
  <select id="module-picker" data-module-picker>
    <option value="1">Module 1: Introduction to ORCID</option>
    <option value="2">Module 2: Benefits of ORCID</option>
    <option value="3">Module 3: ORCID in Practice</option>
    <option value="4">Module 4: Managing ORCID iDs</option>
    <option value="5">Module 5: Linking ORCID to Institutional Systems</option>
    <option value="6">Module 6: Supporting Researchers</option>
    <option value="7">Module 7: Case Studies and Troubleshooting</option>
    <option value="8">Module 8: Wrap-Up and Action Plan</option>
  </select>
  <a class="module-link" data-module-source href="/orcid-course-librarians/">Open module source page</a>
</div>

<div class="slide-deck" data-slide-deck>
  <article class="slide-card" data-slide-content></article>
</div>

<div class="slide-controls">
  <button type="button" class="quiz-reset" data-slide-prev>Previous</button>
  <span class="slide-counter" data-slide-counter>Slide 1 / 1</span>
  <button type="button" class="quiz-check" data-slide-next>Next</button>
</div>

<p class="slide-help">Tip: use left and right arrow keys to navigate slides.</p>

<script>
  (function () {
    var modules = {
      "1": {
        title: "Module 1: Introduction to ORCID",
        duration: "25 minutes",
        sourceUrl: "/orcid-course-librarians/module-1/what-orcid-is/",
        slides: [
          {
            heading: "What ORCID Is",
            points: [
              "ORCID gives researchers a persistent digital identity.",
              "An ORCID iD is a unique 16-digit identifier.",
              "It stays stable across career and institution changes."
            ]
          },
          {
            heading: "Why This Matters",
            points: [
              "Name ambiguity can break attribution and reporting.",
              "ORCID helps keep research metadata trusted and consistent.",
              "Crossref and DataCite integrations improve discoverability."
            ]
          },
          {
            heading: "Activity",
            points: [
              "Draft a one-minute ORCID elevator pitch.",
              "Include one benefit for researchers and one for institutions.",
              "Share and refine as a team."
            ]
          }
        ]
      },
      "2": {
        title: "Module 2: Benefits of ORCID",
        duration: "20 minutes",
        sourceUrl: "/orcid-course-librarians/module-2/benefits-for-researchers/",
        slides: [
          {
            heading: "Benefits for Researchers",
            points: [
              "Reduces misattribution and duplicate identity records.",
              "Supports a portable profile across systems.",
              "Improves visibility of outputs and contributions."
            ]
          },
          {
            heading: "Benefits for Institutions and Libraries",
            points: [
              "Improves reporting quality and confidence in metadata.",
              "Reduces manual cleanup across systems.",
              "Supports strategic workflows such as compliance and analytics."
            ]
          },
          {
            heading: "Activity",
            points: [
              "Create a stakeholder map.",
              "Assign one ORCID benefit to each stakeholder group.",
              "Prioritize two communication messages."
            ]
          }
        ]
      },
      "3": {
        title: "Module 3: ORCID in Practice",
        duration: "20 minutes",
        sourceUrl: "/orcid-course-librarians/module-3/publishing-grants-repositories/",
        slides: [
          {
            heading: "Use Cases",
            points: [
              "Publishing systems can link authors and outputs reliably.",
              "Grant workflows can use ORCID for contributor identity.",
              "Repositories can align deposit metadata with researcher records."
            ]
          },
          {
            heading: "Workflow Lens",
            points: [
              "Map where identity data is entered today.",
              "Mark where ORCID could become the shared identifier.",
              "Estimate reduction in duplicate entry effort."
            ]
          },
          {
            heading: "Activity",
            points: [
              "Compare two local researcher workflows.",
              "Identify one friction point ORCID can remove.",
              "Report recommended process change."
            ]
          }
        ]
      },
      "4": {
        title: "Module 4: Managing ORCID iDs",
        duration: "20 minutes",
        sourceUrl: "/orcid-course-librarians/module-4/record-setup-and-maintenance/",
        slides: [
          {
            heading: "Record Management Basics",
            points: [
              "Support account creation and profile completion.",
              "Promote high-quality affiliation and output data.",
              "Check privacy settings against user intent."
            ]
          },
          {
            heading: "Data Quality Practices",
            points: [
              "Encourage trusted-source updates where possible.",
              "Review records periodically for completeness.",
              "Standardize support guidance for common edits."
            ]
          },
          {
            heading: "Activity",
            points: [
              "Audit a sample record.",
              "List three improvements.",
              "Decide who owns each follow-up action."
            ]
          }
        ]
      },
      "5": {
        title: "Module 5: Linking ORCID to Institutional Systems",
        duration: "20 minutes",
        sourceUrl: "/orcid-course-librarians/module-5/integration-patterns/",
        slides: [
          {
            heading: "Integration Targets",
            points: [
              "CRIS platforms",
              "Institutional repositories",
              "Related publishing and grant systems"
            ]
          },
          {
            heading: "Implementation Strategy",
            points: [
              "Start with one achievable integration path.",
              "Define data ownership and synchronization rules.",
              "Measure impact on metadata consistency."
            ]
          },
          {
            heading: "Activity",
            points: [
              "Sketch your current systems landscape.",
              "Mark a first integration candidate.",
              "Set a 30-day implementation milestone."
            ]
          }
        ]
      },
      "6": {
        title: "Module 6: Supporting Researchers",
        duration: "20 minutes",
        sourceUrl: "/orcid-course-librarians/module-6/communication-strategies/",
        slides: [
          {
            heading: "Adoption Support",
            points: [
              "Use plain-language guidance.",
              "Address common concerns proactively.",
              "Provide clear support channels."
            ]
          },
          {
            heading: "Communication Essentials",
            points: [
              "Tailor messages by audience.",
              "Use examples from local workflows.",
              "Reinforce practical benefits, not only policy goals."
            ]
          },
          {
            heading: "Activity",
            points: [
              "Draft responses to three frequent questions.",
              "Peer-review for clarity and tone.",
              "Publish in your support documentation."
            ]
          }
        ]
      },
      "7": {
        title: "Module 7: Case Studies and Troubleshooting",
        duration: "10 minutes",
        sourceUrl: "/orcid-course-librarians/module-7/case-study-analysis/",
        slides: [
          {
            heading: "Learning from Cases",
            points: [
              "Review examples of successful ORCID adoption.",
              "Identify patterns that made implementation work.",
              "Capture lessons reusable in your institution."
            ]
          },
          {
            heading: "Troubleshooting Routine",
            points: [
              "Classify issue type quickly.",
              "Apply standard resolution steps.",
              "Escalate only when needed with clear context."
            ]
          },
          {
            heading: "Activity",
            points: [
              "Run a mini support clinic with two sample tickets.",
              "Decide root cause and resolution path.",
              "Add outcomes to your troubleshooting log."
            ]
          }
        ]
      },
      "8": {
        title: "Module 8: Wrap-Up and Action Plan",
        duration: "20 minutes",
        sourceUrl: "/orcid-course-librarians/module-8/key-takeaways/",
        slides: [
          {
            heading: "Wrap-Up",
            points: [
              "Review key outcomes from all modules.",
              "Highlight decisions made during activities.",
              "Identify remaining implementation risks."
            ]
          },
          {
            heading: "30-Day Plan",
            points: [
              "Set concrete tasks and owners.",
              "Define milestones and support needs.",
              "Align with institutional priorities."
            ]
          },
          {
            heading: "Next Steps",
            points: [
              "Schedule first implementation checkpoint.",
              "Share support materials with relevant teams.",
              "Keep tracking progress and feedback."
            ]
          }
        ]
      }
    };

    var picker = document.querySelector("[data-module-picker]");
    var sourceLink = document.querySelector("[data-module-source]");
    var slideContent = document.querySelector("[data-slide-content]");
    var counter = document.querySelector("[data-slide-counter]");
    var prevButton = document.querySelector("[data-slide-prev]");
    var nextButton = document.querySelector("[data-slide-next]");
    var params = new URLSearchParams(window.location.search);

    if (!picker || !slideContent || !counter || !prevButton || !nextButton) {
      return;
    }

    var currentModule = params.get("module") || "1";
    if (!modules[currentModule]) {
      currentModule = "1";
    }
    picker.value = currentModule;

    var currentIndex = 0;

    function renderSlide() {
      var module = modules[currentModule];
      var slide = module.slides[currentIndex];
      var points = slide.points.map(function (point) {
        return "<li>" + point + "</li>";
      }).join("");

      slideContent.innerHTML = ""
        + "<p class='slide-module-title'>" + module.title + "</p>"
        + "<p class='slide-duration'>Duration: " + module.duration + "</p>"
        + "<h3>" + slide.heading + "</h3>"
        + "<ul>" + points + "</ul>";
      if (sourceLink) {
        sourceLink.href = module.sourceUrl;
      }

      counter.textContent = "Slide " + (currentIndex + 1) + " / " + module.slides.length;
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === module.slides.length - 1;
    }

    function switchModule(moduleId) {
      if (!modules[moduleId]) {
        return;
      }
      currentModule = moduleId;
      currentIndex = 0;
      var nextParams = new URLSearchParams(window.location.search);
      nextParams.set("module", moduleId);
      window.history.replaceState({}, "", window.location.pathname + "?" + nextParams.toString());
      renderSlide();
    }

    picker.addEventListener("change", function () {
      switchModule(picker.value);
    });

    prevButton.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex -= 1;
        renderSlide();
      }
    });

    nextButton.addEventListener("click", function () {
      var limit = modules[currentModule].slides.length - 1;
      if (currentIndex < limit) {
        currentIndex += 1;
        renderSlide();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        prevButton.click();
      }
      if (event.key === "ArrowRight") {
        nextButton.click();
      }
    });

    renderSlide();
  })();
</script>
