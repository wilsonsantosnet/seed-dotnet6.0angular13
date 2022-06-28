using Seed.Domain.Validations;
using System;
using Common.Domain.Model;
using System.Collections.Generic;

namespace Seed.Domain.Entitys
{
    public class Sample : SampleBase
    {

        public virtual List<SampleItem> CollectionSampleItem { get; set; }
        public Sample()
        {

        }

		 public Sample(int sampleid, string name, int sampletypeid) : base(sampleid, name, sampletypeid) { }


		public class SampleFactory : SampleFactoryBase
        {
            public Sample GetDefaultInstance(dynamic data, CurrentUser user)
            {
				return GetDefaultInstanceBase(data, user);
            }
        }

        public bool IsValid()
        {
            base._validationResult = base._validationResult.Merge(new SampleIsConsistentValidation().Validate(this));
            return base._validationResult.IsValid;
        }
        
    }
}
