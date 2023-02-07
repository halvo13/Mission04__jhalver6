using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04__jhalver6.Models
{
    public class GradeCalcModel
    {
        [Required(ErrorMessage ="The Assignments grade is required")]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int assignment { get; set; }

        [Required(ErrorMessage = "The Project grade is required")]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int project { get; set; }


        [Required(ErrorMessage = "The Quiz grade is required")]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int quiz { get; set; }

        [Required(ErrorMessage = "The Midterm grade is required")]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int midterm { get; set; }

        [Required(ErrorMessage = "The Final grade is required")]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int final { get; set; }

        [Required(ErrorMessage = "The Intex grade is required")]
        [Range(0, 100, ErrorMessage = "Grade must be between 0 and 100")]
        public int intex { get; set; }
    }
}
