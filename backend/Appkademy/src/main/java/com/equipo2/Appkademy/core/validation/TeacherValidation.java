package com.equipo2.Appkademy.core.validation;

import com.equipo2.Appkademy.core.model.enums.Currency;
import com.equipo2.Appkademy.core.model.repository.StudentRepository;
import com.equipo2.Appkademy.core.model.repository.TeacherRepository;
import com.equipo2.Appkademy.core.security.model.repository.UserRepository;
import com.equipo2.Appkademy.rest.error.BadRequestException;
import com.equipo2.Appkademy.rest.error.BusinessException;
import com.equipo2.Appkademy.rest.error.ErrorCodes;
import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Map;

@Component
public class TeacherValidation {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private UserRepository userRepository;

    public static void assertHourlyRatesAreValid(Map<Currency, BigDecimal> hourlyRates) {
        boolean rateWithNegativeValueExists = hourlyRates.entrySet().stream()
                .anyMatch(hourlyRate -> 0 >= hourlyRate.getValue().compareTo(BigDecimal.valueOf(0)));

        if(rateWithNegativeValueExists){
            throw new BusinessException(ErrorCodes.HOURLY_RATES_VALUES_CANNOT_BE_NEGATIVE_OR_ZERO);
        }
    }

    public static void assertEmailIsValid(String email) {
        if(!EmailValidator.getInstance().isValid(email)){
            throw new BadRequestException("email", email);
        };
    }

    public void assertTeacherDoesNotAlreadyExist(String email) {
        if(teacherRepository.findByEmail(email).isPresent()){
            throw new BusinessException(ErrorCodes.TEACHER_WITH_SAME_EMAIL_ALREADY_EXISTS);
        }
    }

    public void assertUserDoesNotAlreadyExist(Long userId) {
        if(teacherRepository.findByUserId(userId).isPresent() || studentRepository.findByUserId(userId).isPresent()){
            throw new BusinessException(ErrorCodes.USER_ID_IS_ALREADY_ATTACHED_TO_ANOTHER_ENTITY);
        }
    }

}
