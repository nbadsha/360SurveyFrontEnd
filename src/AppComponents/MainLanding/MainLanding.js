import React from 'react'

export const MainLanding = () => {
    const pStyle = {
        'textAlign': 'justify',
        'textJustify': 'inter-word'
      }
    return (
      <div className="container">
        <div className="alert alert-primary" role="alert" style={pStyle}>
        <p>A <b>360-degree feedback</b> (also known as <b>multi-rater feedback</b>, <b>multi source feedback</b>, or <b>multi source assessment</b>) is a process through which feedback from an employee's subordinates, colleagues, and supervisor(s), as well as a self-evaluation by the employee themselves is gathered. Such feedback can also include, when relevant, feedback from external sources who interact with the employee, such as customers and suppliers or other interested stakeholders. 360-degree feedback is so named because it solicits feedback regarding an employee's behavior from a variety of points of view (subordinate, lateral, and supervisory). It therefore may be contrasted with "downward feedback" (traditional feedback on work behavior and performance  delivered to subordinates by supervisory or management employees only; see traditional performance appraisal), or "upward feedback" delivered to supervisory or management employees by subordinates only.
</p>
<p>Organizations have most commonly utilized 360-degree feedback for developmental purposes, providing it to employees to assist them in developing work skills and behaviors.  However, organizations are increasingly using 360-degree feedback in performance evaluations and employment decisions (e.g., pay; promotions).  When 360-degree feedback is used for performance evaluation purposes, it is sometimes called a "360-degree review".
</p>
        </div>
      </div>
    );
}
